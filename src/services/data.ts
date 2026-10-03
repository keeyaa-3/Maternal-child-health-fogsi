import type { Pregnancy, CarePlan, Medication, Task, Appointment, Alert, CaregiverAccess, TimelineEvent } from '../types/database';
const token=()=>localStorage.getItem('carebridge_session');
async function api(path:string,options:RequestInit={}){const h=new Headers(options.headers);h.set('Content-Type','application/json');const t=token();if(t)h.set('Authorization',`Bearer ${t}`);const r=await fetch(path,{...options,headers:h});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'Request failed');return d}
export const demoPregnancy:Pregnancy={id:'demo-patient',patient_id:'demo-patient',gestational_weeks:28,due_date:'2026-12-25',trimester:'Third trimester',notes:'Routine maternity follow-up.'};
export const demoCarePlan:CarePlan={id:'cp1',patient_id:'demo-patient',clinician_id:'demo-clinician',title:'Maternity Care Plan',clinical_instructions:'Continue prescribed supplements, maintain hydration, follow the agreed nutrition and rest plan, attend scheduled maternity visits, and complete the next recommended check-in.',caregiver_summary:'Support hydration, rest, appointment preparation, and the agreed daily care routine. Follow clinician-approved instructions and report concerns rather than changing clinical instructions.',warning_signs:'If there is a significant or concerning change in condition, contact the maternity care team promptly.',status:'approved',ai_generated_summary:false,ai_approved:true};
export const demoMeds:Medication[]=[];
export const demoTasks:Task[]=[];
export const demoAppointment:Appointment={id:'a1',patient_id:'demo-patient',clinician_id:'demo-clinician',appointment_date:'2026-10-12',appointment_time:'10:30',appointment_type:'Routine maternity follow-up',location:'Maternity Care Clinic',status:'scheduled',notes:'Bring current medication list and questions.'};
export const demoAccess:CaregiverAccess={id:'ca1',patient_id:'demo-patient',caregiver_id:'demo-caregiver',can_view_care_plan:true,can_view_medications:true,can_view_tasks:true,can_view_appointments:true,can_report_concerns:true,status:'active',expires_at:'2026-11-15T23:59:59+05:30'};
export const demoAlerts:Alert[]=[];
export const demoTimeline:TimelineEvent[]=[];
export async function getAccess(){try{Object.assign(demoAccess,await api('/api/access'))}catch{}return demoAccess}
export async function updateAccess(a:Partial<CaregiverAccess>){Object.assign(demoAccess,await api('/api/access',{method:'PUT',body:JSON.stringify(a)}));return demoAccess}
export async function getTasks(patientId='demo-patient'){try{demoTasks.splice(0,demoTasks.length,...await api(`/api/tasks?patient_id=${encodeURIComponent(patientId)}`))}catch{}return demoTasks}
export async function updateTask(id:string,completed:boolean){const t=await api(`/api/tasks/${id}`,{method:'PATCH',body:JSON.stringify({completed})});const i=demoTasks.findIndex(x=>x.id===id);if(i>=0)demoTasks[i]=t;return t}
export async function getMedications(patientId='demo-patient'){try{demoMeds.splice(0,demoMeds.length,...await api(`/api/medications?patient_id=${encodeURIComponent(patientId)}`))}catch{}return demoMeds}
export async function addMedication(input:Partial<Medication>){const x=await api('/api/medications',{method:'POST',body:JSON.stringify(input)});demoMeds.unshift(x);return x}
export async function updateMedication(id:string,input:Partial<Medication>){const x=await api(`/api/medications/${id}`,{method:'PATCH',body:JSON.stringify(input)});const i=demoMeds.findIndex(m=>m.id===id);if(i>=0)demoMeds[i]=x;return x}
export async function getCarePlan(patientId='demo-patient'){try{const x=await api(`/api/care-plan?patient_id=${encodeURIComponent(patientId)}`);if(x)Object.assign(demoCarePlan,x)}catch{}return demoCarePlan}
export async function saveCarePlan(input:Partial<CarePlan>){Object.assign(demoCarePlan,await api('/api/care-plan',{method:'PUT',body:JSON.stringify(input)}));return demoCarePlan}
export async function saveAlert(a:Partial<Alert>){const x=await api('/api/alerts',{method:'POST',body:JSON.stringify(a)});demoAlerts.unshift(x);return x}
export async function getAlerts(){try{demoAlerts.splice(0,demoAlerts.length,...await api('/api/alerts'))}catch{}return demoAlerts}
export async function acknowledgeAlert(id:string){const a=demoAlerts.find(x=>x.id===id);if(a)a.status='acknowledged';await api(`/api/alerts/${id}/ack`,{method:'PATCH'});return a}
export async function getAppointments(patientId='demo-patient'){try{return await api(`/api/appointments?patient_id=${encodeURIComponent(patientId)}`)}catch{return [demoAppointment]}}
export async function confirmAppointment(id:string){return await api(`/api/appointments/${id}`,{method:'PATCH',body:JSON.stringify({confirm_presence:true})})}
export async function getAccessMonitor(){return await api('/api/admin/access-monitor')}
export async function getNotifications(){return await api('/api/notifications')}
export async function markNotificationsRead(){await api('/api/notifications/read-all',{method:'POST'})}
export async function getAdminUsers(){return await api('/api/admin/users')}
export async function createAdminUser(input:any){return await api('/api/admin/users',{method:'POST',body:JSON.stringify(input)})}
export async function updateAdminUser(id:string,input:any){return await api(`/api/admin/users/${id}`,{method:'PATCH',body:JSON.stringify(input)})}
export async function getRegistrationRequests(){return await api('/api/admin/registration-requests')}
export async function submitRegistrationRequest(input:any){return await api('/api/registration-requests',{method:'POST',body:JSON.stringify(input)})}

export async function getHealthProfile(patientId='demo-patient'){return await api(`/api/health-profile?patient_id=${encodeURIComponent(patientId)}`)}
export async function saveHealthProfile(input:any){return await api('/api/health-profile',{method:'PUT',body:JSON.stringify(input)})}
export async function getVaccinations(patientId='demo-patient'){return await api(`/api/vaccinations?patient_id=${encodeURIComponent(patientId)}`)}
export async function addVaccination(input:any){return await api('/api/vaccinations',{method:'POST',body:JSON.stringify(input)})}
export async function getPregnancyScans(patientId='demo-patient'){return await api(`/api/pregnancy-scans?patient_id=${encodeURIComponent(patientId)}`)}
export async function addPregnancyScan(input:any){return await api('/api/pregnancy-scans',{method:'POST',body:JSON.stringify(input)})}
export async function getAvailability(clinicianId='demo-clinician'){return await api(`/api/availability?clinician_id=${encodeURIComponent(clinicianId)}`)}
export async function addAvailability(input:any){return await api('/api/availability',{method:'POST',body:JSON.stringify(input)})}
export async function scheduleAppointment(input:any){return await api('/api/appointments',{method:'POST',body:JSON.stringify(input)})}
export async function getRescheduleRequests(){return await api('/api/reschedule-requests')}
export async function requestReschedule(input:any){return await api('/api/reschedule-requests',{method:'POST',body:JSON.stringify(input)})}
export async function reviewReschedule(id:string,status:string){return await api(`/api/reschedule-requests/${id}`,{method:'PATCH',body:JSON.stringify({status})})}
export async function addCareTask(input:any){return await api('/api/tasks',{method:'POST',body:JSON.stringify(input)})}
export async function getPersonalRecord(patientId='demo-patient'){return await api(`/api/personal-record?patient_id=${encodeURIComponent(patientId)}`)}
export async function savePersonalRecord(input:any){return await api('/api/personal-record',{method:'PUT',body:JSON.stringify(input)})}
