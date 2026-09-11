import {readFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';

export async function verifyDeployment({baseUrl,commit,version,fetcher=fetch}) {
  if(!/^[a-f0-9]{40}$/.test(commit??''))throw new Error('A full Git commit SHA is required.');
  const base=new URL(baseUrl);
  if(base.protocol!=='https:')throw new Error('Production verification requires HTTPS.');
  const get=async path=>{
    const response=await fetcher(new URL(path,base),{redirect:'error',signal:AbortSignal.timeout(15000),headers:{'Cache-Control':'no-cache'}});
    if(!response.ok)throw new Error(`${path}: HTTP ${response.status}`);
    return response;
  };
  const info=await(await get(`/build-info.json?commit=${commit}`)).json();
  if(info.commit!==commit||info.version!==version)throw new Error(`Production build mismatch: expected ${version}/${commit}, received ${info.version}/${info.commit}.`);
  const routes=['/','/praesentation','/organigramm','/charts','/prompt-compiler'];
  for(const path of routes){
    const response=await get(path);
    if(!response.headers.get('content-type')?.includes('text/html'))throw new Error(`${path}: expected HTML.`);
    const html=await response.text();
    if(!html.includes('id="main"'))throw new Error(`${path}: framework page content missing.`);
  }
  const contract=await(await get('/contracts/engineering.md')).text();
  if(!contract.includes('Engineering'))throw new Error('Engineering contract missing.');
  return {commit,version,routes:routes.length};
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const [baseUrl,commit]=process.argv.slice(2);
  const {version}=JSON.parse(await readFile(new URL('../package.json',import.meta.url),'utf8'));
  let failure;
  for(let attempt=1;attempt<=6;attempt++){
    try{
      const result=await verifyDeployment({baseUrl,commit,version});
      console.log(`Production verified: ${result.version}, commit ${result.commit}, ${result.routes} routes and engineering contract.`);
      failure=undefined;break;
    }catch(error){
      failure=error;
      console.error(`Verification ${attempt}/6: ${error.message}`);
      if(attempt<6)await new Promise(resolve=>setTimeout(resolve,5000));
    }
  }
  if(failure)process.exitCode=1;
}
