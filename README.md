# Industrial Research Dashboard

Newest sourced dashboard only; no older demos or ZIP archives.

Publication status: the dashboard source and data are prepared for a following approved commit. Until those files are committed, this repository is not runnable.

Open `index.html` with all repository files together. No install or credentials needed. Optionally run `python -m http.server 8000` for a stable browser-storage origin.

Initial data: 17 indicators, 114 sourced observations, 109 unique indicator-months. History is partial; three HVAC component series have one point each. Source dates are not certified first releases. No synthetic values, interpolation, live scraper, ISM forecast engine or equity-factor engine.

Graphs, source/coverage details, edition selection, CSV import/export and local report originals/metadata are included. PDF/DOCX text is not extracted. Back up uploads; browser storage is not a team database. Read `AGENTS.md` for goals and safeguards.

Canonical rows in `data/indicators.js`: month, value, optional source-publication date, edition and source URL. Defaults are documented in `src/core.js`. Tests: `node --test tests/core.test.cjs`. Browser rendering still needs local review.
