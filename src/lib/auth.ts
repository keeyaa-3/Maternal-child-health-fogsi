import type {Role,Profile} from '../types/database';

const TOKEN_KEY='carebridge_session';

type ApiUser={id:string;email:string;role:Role};
function token(){return localStorage.getItem(TOKEN_KEY)}
async function api(path:string,options:RequestInit={}){const headers=new Headers(options.headers);headers.set('Content-Type','application/json');const t=token();if(t)headers.set('Authorization',`Bearer ${t}`);const r=await fetch(path,{...options,headers});const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.error||'Request failed');return data}

export async function signIn(email:string,password:string){const data=await api('/api/auth/login',{method:'POST',body:JSON.stringify({email,password})});localStorage.setItem(TOKEN_KEY,data.token);return data.user as ApiUser}
export async function signOut(){try{await api('/api/auth/logout',{method:'POST'})}finally{localStorage.removeItem(TOKEN_KEY)}}
export async function getCurrentUser(){if(!token())return null;try{return (await api('/api/auth/me')).user as ApiUser}catch{localStorage.removeItem(TOKEN_KEY);return null}}
export async function getProfile(userId:string){const user=await getCurrentUser();if(!user||user.id!==userId)return null;return {id:user.id,email:user.email,full_name:user.email.split('@')[0],role:user.role} as Profile}
export function roleHome(role:Role){return `/${role}`}
export {TOKEN_KEY};
