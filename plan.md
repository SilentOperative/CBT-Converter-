# CBT-Converter Frontend Recreation

## Scope
Recreate the public NewtCBT frontend from `https://www.newtcbt.in/` and extend it into a usable local-only CBT workspace. Database, authentication, cloud file storage, and live server behavior remain deferred.

## Implemented experience
The project now includes the public landing page, About, Documentation, Privacy, and Terms routes, plus a dashboard, custom test builder, local PDF/image selection, generated CBT test interface, question palette and answer state, performance analytics, public test library, live-room simulation, local notebook, and settings. Demo preferences and notebook content use browser localStorage only.

## Design
The interface uses a dark developer-tool editorial movement with neon exam-lab accents. Near-black surfaces create contrast for lime/yellow actions. The layout uses asymmetric split content, bordered panels, monospace utility labels, and responsive mobile behavior. Space Grotesk handles content while DM Mono handles labels and metadata.

## Project structure
- `index.html`: static entrypoint and metadata.
- `app.js`: route-aware frontend rendering, local state, demo workflows, and interactions.
- `styles.css`: responsive public site and workspace visual system.
- `public/assets/`: locally copied public reference imagery.
- `public/manus-routes.json`: complete page route declaration.

## Deferred backend work
Authentication, question generation, PDF extraction, database schema, uploaded documents, analytics persistence, live-room synchronization, and cloud library records are isolated behind the current frontend flows so they can be connected later without replacing the UI.
