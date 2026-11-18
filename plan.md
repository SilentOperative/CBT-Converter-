# CBT-Converter Frontend Recreation

## Scope
Recreate the public NewtCBT frontend from `https://www.newtcbt.in/` without implementing or changing the database/backend. The first pass covers the responsive landing page, auth card placeholder, feature grid, testimonials, interface preview gallery, About, Documentation, Privacy, Terms, and Custom Builder placeholder routes.

## Design
- **Design movement:** dark developer-tool editorial with neon exam-lab accents.
- **Core principles:** high contrast, compact information density, credible utility, and progressive disclosure.
- **Color philosophy:** near-black surfaces make the lime/yellow accents read like instrumentation and keep attention on actions.
- **Layout paradigm:** asymmetric split hero followed by bordered, editorial content bands rather than a generic centered marketing grid.
- **Signature elements:** thin graphite rules, neon lime micro-labels, and compact monospace utility text.
- **Interaction philosophy:** every primary control is clear and reversible; auth and builder actions are explicitly frontend-only until backend wiring is approved.
- **Typography:** Space Grotesk for content and DM Mono for labels, metadata, and route utility text.
- **Brand essence:** a practical, community-built exam workspace for JEE/NEET aspirants; focused, technical, generous.

## Project structure
- `index.html`: static entrypoint and metadata.
- `app.js`: route-aware frontend rendering and small interactions.
- `styles.css`: responsive visual system.
- `public/assets/`: locally copied public reference imagery.
- `public/manus-routes.json`: route declaration for runtime inspection.

## Deferred
Authentication, question generation, database schema, uploaded documents, analytics persistence, live rooms, and all server/API behavior remain placeholders.
