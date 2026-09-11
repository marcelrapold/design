import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const received=process.argv.slice(2);
const args=received.filter(arg=>arg!=='--strictPort').map(arg=>arg==='--host'?'--hostname':arg);
const child=spawn(process.execPath,[require.resolve('next/dist/bin/next'),'dev',...args],{
  cwd:new URL('../apps/docs/',import.meta.url),stdio:'inherit',env:process.env,
});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??1));
