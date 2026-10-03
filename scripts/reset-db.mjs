import{existsSync,unlinkSync}from'node:fs';
const path='data/carebridge.sqlite';
if(existsSync(path))unlinkSync(path);
console.log('CareBridge SQLite database reset. It will be recreated with demo data on the next server start.');
