# CareBridge Architecture

## Frontend
React + Vite + TypeScript + Tailwind CSS with reusable shadcn-style UI components.

## Local MVP backend
Node.js API + SQLite, retained from the supplied reference implementation for fast local execution.

## Hosted target
Vercel for the frontend and Supabase Auth/PostgreSQL for hosted persistence. `supabase/schema.sql` contains the consent-aware RLS model.

## Access model
Patient → Consent → Caregiver permissions → expiration/revocation.

The UI never acts as the security boundary. Server-side authorization is required, and the hosted deployment should enforce the same relationship with Supabase RLS.

## Clinical summary model
Selected maternity-care information → AI-assisted draft → clinician review/edit → approve/reject → approved summary.

AI output is not automatically accepted as clinical information.
