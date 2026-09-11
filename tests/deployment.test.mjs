import test from 'node:test';
import assert from 'node:assert/strict';
import {verifyDeployment} from '../scripts/verify-deployment.mjs';

const commit='0123456789abcdef0123456789abcdef01234567';
const config={baseUrl:'https://design.example',commit,version:'0.4.0'};
function site({buildCommit=commit,routeStatus=200,html='<main id="main">Framework</main>'}={}){
  return async url=>{
    if(url.pathname==='/build-info.json')return Response.json({commit:buildCommit,version:'0.4.0'});
    if(url.pathname==='/contracts/engineering.md')return new Response('# Engineering');
    return new Response(html,{status:routeStatus,headers:{'Content-Type':'text/html'}});
  };
}
test('deployment verification accepts the requested release and all public routes',async()=>{
  assert.deepEqual(await verifyDeployment({...config,fetcher:site()}),{commit,version:'0.4.0',routes:5});
});
test('a stale deployment cannot pass even when every route returns HTTP 200',async()=>{
  await assert.rejects(verifyDeployment({...config,fetcher:site({buildCommit:'f'.repeat(40)})}),/build mismatch/);
});
test('broken routes and login or fallback pages cannot report a successful rollout',async()=>{
  await assert.rejects(verifyDeployment({...config,fetcher:site({routeStatus:404})}),/HTTP 404/);
  await assert.rejects(verifyDeployment({...config,fetcher:site({html:'<h1>Sign in</h1>'})}),/content missing/);
});
