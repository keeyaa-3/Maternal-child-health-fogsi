import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PatientDashboard from './pages/patient/Dashboard';
import PatientCare from './pages/patient/Care';
import Consent from './pages/patient/Consent';
import Caregivers from './pages/patient/Caregivers';
import PatientTasks from './pages/patient/Tasks';
import PatientAppointments from './pages/patient/Appointments';
import Notifications from './pages/patient/Notifications';
import MaternityRecords from './pages/shared/MaternityRecords';
import ClinicianSchedule from './pages/clinician/Schedule';
import CaregiverDashboard from './pages/caregiver/Dashboard';
import CaregiverTasks from './pages/caregiver/Tasks';
import CaregiverAppointments from './pages/caregiver/Appointments';
import CaregiverMedications from './pages/caregiver/Medications';
import ReportConcern from './pages/caregiver/ReportConcern';
import ClinicianDashboard from './pages/clinician/Dashboard';
import Patients from './pages/clinician/Patients';
import PatientDetail from './pages/clinician/PatientDetail';
import ClinicianNotifications from './pages/clinician/Notifications';
import Admin from './pages/admin/Admin';
import { UsersPage, AccessPage } from './pages/admin/Management';
import type { Role } from './types/database';
import { getCurrentUser, roleHome } from './lib/auth';

function Guard({role,children}:{role:Role;children:React.ReactNode}){const[ready,setReady]=useState(false),[ok,setOk]=useState(false),loc=useLocation();useEffect(()=>{let alive=true;getCurrentUser().then(u=>{if(alive){setOk(u?.role===role);setReady(true)}});return()=>{alive=false}},[role,loc.pathname]);if(!ready)return <div className="min-h-screen grid place-items-center text-slate-400">Loading…</div>;return ok?<>{children}</>:<Navigate to="/signin" replace/>}
function PublicOnly({children}:{children:React.ReactNode}){const[ready,setReady]=useState(false),[home,setHome]=useState('/signin');useEffect(()=>{getCurrentUser().then(u=>{if(u)setHome(roleHome(u.role));setReady(true)})},[]);if(!ready)return <div className="min-h-screen grid place-items-center text-slate-400">Loading…</div>;return home==='/signin'?<>{children}</>:<Navigate to={home} replace/>}
export default function App(){return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/signin" element={<PublicOnly><Login/></PublicOnly>}/><Route path="/login" element={<Navigate to="/signin" replace/>}/><Route path="/signup" element={<PublicOnly><SignUp/></PublicOnly>}/><Route path="/patient" element={<Guard role="patient"><PatientDashboard/></Guard>}/><Route path="/patient/care" element={<Guard role="patient"><PatientCare/></Guard>}/><Route path="/patient/caregivers" element={<Guard role="patient"><Caregivers/></Guard>}/><Route path="/patient/caregivers/manage" element={<Guard role="patient"><Consent/></Guard>}/><Route path="/patient/tasks" element={<Guard role="patient"><PatientTasks/></Guard>}/><Route path="/patient/appointments" element={<Guard role="patient"><PatientAppointments/></Guard>}/><Route path="/patient/notifications" element={<Guard role="patient"><Notifications/></Guard>}/><Route path="/patient/records" element={<Guard role="patient"><MaternityRecords role="patient"/></Guard>}/><Route path="/caregiver" element={<Guard role="caregiver"><CaregiverDashboard/></Guard>}/><Route path="/caregiver/tasks" element={<Guard role="caregiver"><CaregiverTasks/></Guard>}/><Route path="/caregiver/appointments" element={<Guard role="caregiver"><CaregiverAppointments/></Guard>}/><Route path="/caregiver/medications" element={<Guard role="caregiver"><CaregiverMedications/></Guard>}/><Route path="/caregiver/report-concern" element={<Guard role="caregiver"><ReportConcern/></Guard>}/><Route path="/caregiver/records" element={<Guard role="caregiver"><MaternityRecords role="caregiver"/></Guard>}/><Route path="/clinician" element={<Guard role="clinician"><ClinicianDashboard/></Guard>}/><Route path="/clinician/patients" element={<Guard role="clinician"><Patients/></Guard>}/><Route path="/clinician/patients/:id" element={<Guard role="clinician"><PatientDetail/></Guard>}/><Route path="/clinician/notifications" element={<Guard role="clinician"><ClinicianNotifications/></Guard>}/><Route path="/clinician/schedule" element={<Guard role="clinician"><ClinicianSchedule/></Guard>}/><Route path="/clinician/patients/:id/records" element={<Guard role="clinician"><MaternityRecords role="clinician"/></Guard>}/><Route path="/admin" element={<Guard role="admin"><Admin/></Guard>}/><Route path="/admin/users" element={<Guard role="admin"><UsersPage/></Guard>}/><Route path="/admin/access" element={<Guard role="admin"><AccessPage/></Guard>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></BrowserRouter>}
