# CareBridge

## Maternal Care Management & Coordination Platform

CareBridge is a role-based maternal healthcare coordination platform
connecting **patients, caregivers, clinicians, and administrators**
through a structured care workflow.

> **Core principle:** Patients control caregiver access, while
> clinicians retain responsibility for clinical care and medical
> decisions.

------------------------------------------------------------------------

## Features

### Patient / Mother

-   Manage personal and pregnancy information
-   View clinician-created care plans and instructions
-   View prescribed medications
-   Track appointments and reminders
-   View vaccinations and pregnancy scans
-   View assigned caregiver tasks
-   Grant, modify, and revoke caregiver consent
-   Receive notifications
-   View shared care records
-   Access maternity financial-help information

### Caregiver

-   Access only information authorized by the patient
-   View and complete assigned care tasks
-   View permitted appointments and care instructions
-   Confirm appointment presence
-   Request appointment rescheduling
-   Mark medications as taken
-   Submit observations and concerns to clinicians
-   View shared vaccination and pregnancy scan records
-   Receive relevant notifications

### Clinician / Doctor

-   View assigned patients
-   Access complete patient medical records
-   Manage personal and clinical records
-   Create and update care plans
-   Add clinical instructions and warning signs
-   Prescribe and manage medications
-   Add vaccination and pregnancy scan records
-   Define availability and schedule appointments
-   Review caregiver observations and concerns
-   Assign caregiver tasks
-   Review reschedule requests

### Admin

-   Manage users and roles
-   Register patients, caregivers, and clinicians
-   Manage patient-caregiver relationships
-   Manage permissions and consent
-   Monitor access activity and audit logs
-   Manage platform settings

------------------------------------------------------------------------

## Consent & Access Control

CareBridge combines **role-based access control (RBAC)** with
patient-controlled caregiver consent.

``` text
Patient
  |
  +-- Grant consent ------> Caregiver receives permitted information
  |
  +-- Modify permissions -> Access changes
  |
  +-- Revoke / Expire ----> Caregiver access is restricted
```

Caregiver access is limited to authorized information such as care
plans, medications, tasks, appointments, financial-help information, and
concern reporting.

Complete medical history remains restricted to authorized clinicians.

------------------------------------------------------------------------

## Clinical Records

### Personal Records

-   Full patient name
-   Date of birth
-   Phone
-   Email
-   Address
-   Emergency contact
-   Emergency contact relationship

### Medical Records

-   Blood group
-   Medicine allergies
-   Diabetes information
-   Hypertension and other chronic conditions
-   Previous medical/surgical history
-   Current health conditions
-   Pregnancy/obstetric history
-   Current medications
-   Clinician notes
-   Historical clinical updates

Records are stored against the individual patient so histories remain
isolated between patients.

------------------------------------------------------------------------

## Medications

Clinicians manage prescriptions containing:

-   Medication name
-   Dosage
-   Frequency
-   Schedule
-   Instructions
-   Active/stopped status

Authorized caregivers can mark eligible medications as **taken**. The
action is recorded while the pending medication list is updated.

------------------------------------------------------------------------

## Vaccinations

Vaccination records support:

-   Vaccine name
-   Dose
-   Date administered
-   Due / next-dose date
-   Status
-   Notes

Visibility is controlled by role and applicable consent.

------------------------------------------------------------------------

## Pregnancy Scans

Structured scan records support:

-   Scan type
-   Scan date
-   Gestational week
-   Findings / summary
-   Clinician notes
-   Report or file reference
-   Status

Examples include dating, NT, anomaly, growth, Doppler, and other
pregnancy scans.

------------------------------------------------------------------------

## Appointments

Clinicians define availability and schedule patient appointments.

``` text
Clinician Availability
        ↓
Available Slot
        ↓
Appointment Booking
        ↓
Notifications
        ↓
Appointment Confirmation
        ↓
Attendance / Follow-up
```

Caregivers can confirm presence and request rescheduling. Clinicians
review and approve or reject reschedule requests.

------------------------------------------------------------------------

## Caregiver Tasks

Clinicians can assign tasks such as:

-   Attend appointment
-   Bring scan/report
-   Medication reminder
-   Follow care instructions
-   Hydration/rest reminder
-   Follow-up requirement
-   Custom task

Caregivers can update task progress and completion status.

------------------------------------------------------------------------

## Notifications

Notifications can cover:

-   Appointments
-   Pending tasks
-   Medication reminders
-   Clinician instructions
-   Caregiver concerns
-   Consent changes and expiry
-   Care-plan updates
-   Medication changes
-   Appointment confirmations
-   Reschedule requests
-   Vaccination updates
-   Pregnancy scan updates

------------------------------------------------------------------------

## System Architecture

``` text
 Patient       Caregiver       Clinician       Admin
    |              |               |             |
    +--------------+---------------+-------------+
                           |
                           v
                 React + Vite Frontend
                           |
                        REST API
                           |
                           v
                 Node.js + Express
                           |
              +------------+------------+
              |                         |
              v                         v
           SQLite                 Local Storage
          Database                 / Files
```

### Backend responsibilities

-   Authentication and authorization
-   RBAC
-   Patient and caregiver management
-   Clinician management
-   Medical records
-   Care plans
-   Medications
-   Vaccinations
-   Pregnancy scans
-   Appointments and availability
-   Caregiver tasks
-   Notifications
-   Consent and permissions
-   Audit/access monitoring

------------------------------------------------------------------------

## Technology Stack

### Frontend

-   React
-   Vite
-   TypeScript
-   Tailwind CSS
-   Recharts
-   Axios

### Backend

-   Node.js
-   Express.js
-   REST APIs

### Database

-   SQLite

### Storage

-   Local file storage

### Development

-   Git
-   GitHub
-   Postman
-   VS Code

### Security

-   Role-Based Access Control
-   Consent and Permission Management
-   Protected Clinical Records
-   Access Monitoring
-   Audit Logs

> **Current architecture note:** CareBridge does **not** use a
> Python/FastAPI backend and does **not** currently contain an AI/ML
> layer.

------------------------------------------------------------------------

## Project Structure

``` text
CareBridge/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── database/
│   │   ├── models/
│   │   └── utils/
│   ├── uploads/
│   └── package.json
│
├── database/
│   └── carebridge.sqlite
│
├── docs/
├── .env.example
├── .gitignore
└── README.md
```

------------------------------------------------------------------------

## Getting Started

### Prerequisites

-   Node.js
-   npm
-   Git

Check versions:

``` bash
node --version
npm --version
git --version
```

### Clone

``` bash
git clone <repository-url>
cd CareBridge
```

### Frontend

``` bash
cd frontend
npm install
npm run dev
```

### Backend

Open another terminal:

``` bash
cd backend
npm install
npm run dev
```

Use the scripts defined in each `package.json` if the command names
differ.

### Environment

Create `.env` from `.env.example` and configure the values required by
the current project.

------------------------------------------------------------------------

## Demo Accounts

  Role        Account
  ----------- -----------------------------
  Patient     `patient@carebridge.demo`
  Caregiver   `caregiver@carebridge.demo`
  Clinician   `clinician@carebridge.demo`
  Admin       `admin@carebridge.demo`

Authentication credentials should follow the current local seed/database
configuration.

------------------------------------------------------------------------

## End-to-End Workflow

``` text
Patient Registration
        ↓
Patient Profile & Pregnancy Information
        ↓
Clinician Review
        ↓
Care Plan + Clinical Instructions
        ↓
Appointments + Medications
        ↓
Patient Grants Caregiver Consent
        ↓
Caregiver Receives Authorized Information
        ↓
Caregiver Performs Assigned Tasks
        ↓
Caregiver Reports Observations / Concerns
        ↓
Clinician Reviews & Responds
        ↓
Ongoing Maternal Care Coordination
```

------------------------------------------------------------------------

## Role Matrix

  Capability                  Patient           Caregiver               Clinician      Admin
  -------------------------- --------- ---------------------------- ----------------- -------
  Personal profile               ✓                  ✓                     View           ✓
  Caregiver consent              ✓                 ---                    View           ✓
  Care plan                    View               View\*                 Manage         ---
  Medications                  View           View / Take\*              Manage         ---
  Vaccinations                 View               View\*                 Manage         ---
  Pregnancy scans              View               View\*                 Manage         ---
  Appointments                 View     Confirm / Request change\*       Manage         ---
  Caregiver tasks              View             Complete\*           Assign / Review    ---
  Care concerns                 ---              Submit\*                Review         ---
  Complete medical history      ---                ---                      ✓           ---
  User management               ---                ---                     ---           ✓
  Access monitoring             ---                ---                     ✓\*           ✓

`*` Subject to active consent and applicable permissions.

------------------------------------------------------------------------

## Security & Privacy Principles

1.  **Least privilege** --- users receive only role-appropriate
    information.
2.  **Patient-controlled sharing** --- caregivers do not automatically
    receive complete patient records.
3.  **Clinical record protection** --- complete medical history is
    restricted to authorized clinicians.
4.  **Consent lifecycle** --- permissions can be granted, modified,
    revoked, or restricted after expiry.
5.  **Patient-specific isolation** --- records are associated with the
    correct patient.
6.  **Auditability** --- relevant access and platform actions can be
    monitored.
7.  **Role separation** --- administrative access does not replace
    clinical responsibility.

------------------------------------------------------------------------

## Testing

Recommended test areas:

### Authentication

-   Valid/invalid login
-   Role-based routing
-   Logout
-   Protected routes

### Consent

-   Grant access
-   Modify permissions
-   Revoke access
-   Expired consent
-   Unauthorized access prevention

### Clinical Records

-   Create/update patient records
-   Maintain medical history
-   Verify patient-specific data isolation
-   Verify clinician-only access

### Medications

-   Create prescription
-   Update prescription
-   Mark medication as taken
-   Verify medication history

### Appointments

-   Create availability
-   Book appointment
-   Confirm presence
-   Request reschedule
-   Approve/reject reschedule

### Care Tasks

-   Assign task
-   Update status
-   Complete task
-   Verify notifications

### Vaccinations & Scans

-   Add/update records
-   Verify authorized visibility

------------------------------------------------------------------------

## Design Principles

CareBridge uses a calm healthcare-oriented UI:

-   Clean neutral backgrounds
-   Clear information hierarchy
-   Accessible typography and contrast
-   Rounded cards and restrained shadows
-   Simple icons
-   Responsive layouts
-   Minimal visual clutter
-   Clear separation between clinical and non-clinical information

------------------------------------------------------------------------

## Scope

CareBridge focuses on:

-   Maternal care coordination
-   Patient-caregiver collaboration
-   Clinician-led care
-   Consent-based information sharing
-   Medical record management
-   Care plans
-   Medication tracking
-   Vaccination tracking
-   Pregnancy scan records
-   Appointment coordination
-   Caregiver task management
-   Notifications
-   Access monitoring

The current system intentionally does **not** introduce AI-generated
clinical decisions or AI-authored care plans.

------------------------------------------------------------------------

## Future Enhancements

Possible future improvements:

-   Cloud database migration
-   Secure object/file storage
-   Production-grade authentication and sessions
-   Multi-clinic / hospital support
-   Teleconsultation
-   Calendar integrations
-   Secure document viewer
-   More granular consent categories
-   Advanced audit reporting
-   SMS/email notification integrations
-   Multilingual support
-   Accessibility enhancements
-   Production deployment and monitoring

------------------------------------------------------------------------

## Contributing

Create a feature branch:

``` bash
git checkout -b feature/your-feature
```

Commit changes:

``` bash
git add .
git commit -m "Add your feature"
```

Push the branch:

``` bash
git push origin feature/your-feature
```

Then open a pull request against the main project branch.

------------------------------------------------------------------------

## License

Add the project's selected license here before public distribution.

------------------------------------------------------------------------

## CareBridge

**Connected Care. Healthier Tomorrows.**
