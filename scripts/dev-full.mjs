import{spawn}from'node:child_process';
const root=process.cwd();
const server=spawn(process.execPath,['server/index.mjs'],{cwd:root,stdio:'inherit'});
const vite=spawn(process.execPath,['node_modules/vite/bin/vite.js'],{cwd:root,stdio:'inherit'});
const stop=()=>{server.kill();vite.kill();};
process.on('SIGINT',()=>{stop();process.exit(0)});
process.on('SIGTERM',()=>{stop();process.exit(0)});
server.on('exit',code=>{if(code&&code!==0){vite.kill();process.exit(code)}});
vite.on('exit',code=>{if(code&&code!==0){server.kill();process.exit(code)}});
