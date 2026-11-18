# CBT-Converter Frontend Recreation

## Current scope
The repository now contains the public NewtCBT-style shell, a functional local workspace, the full copied CBT Converter frontend bundle, and local question-bank assets. The `/cbt` and `/cbt/mains` routes open the full CBT experience from `public/cbtconverter/index.html`.

## Local data inventory
- Curated question-bank manifest: 6,095 questions across Physics, Chemistry, and Mathematics.
- JEE Hub paper manifest: 15 papers covering JEE Main, JEE Advanced, BITSAT, NEET, COMEDK, and MHT-CET.
- Historical Aspiron PYQ manifest: additional local medical entrance datasets.
- Full CBT frontend bundle: PDF-to-CBT extraction UI, custom CBT flow, test runner, review, results, local persistence, and KaTeX rendering.

The reference site's private 300K+ backend question bank was not copied because no export or backend dump is present in the repository. `public/data/manifest.json` records this explicitly and is the import boundary for an authorized question-bank export later.

## Design
The public shell follows the reference dark editorial visual language. The full CBT bundle follows the mobile layout supplied in the reference image, including exam tabs, question counts, custom CBT, full-syllabus mock, bottom navigation, and the internal CBT flow.

## Deferred integration
Authentication, cloud synchronization, backend question selection, live-room synchronization, and database persistence can be connected later without replacing the local CBT bundle or its data paths.
