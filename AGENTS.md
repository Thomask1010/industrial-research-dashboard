# AGENTS.md — Industrial Investment Research Dashboard

## Mission and scope
Build an auditable workbench for Narwhal Capital Management: historical industrial indicators, sell-side/report mapping, monthly ISM nowcasts and FMP-backed stock-factor analysis. Keep only the newest dashboard/source/data/docs/tests. Exclude old demos, ZIPs, secrets and private uploaded reports.

## Current implementation
Static HTML/JS indicator/research layer; initial snapshot: 17 series, 114 sourced observations, 109 unique indicator-months. Recompute counts after changes. Missing months are not interpolated. Originals/revisions and flash/final PMI editions are distinct. Browser-local imports and report originals/metadata use IndexedDB. TXT can be read; no PDF/DOCX extraction or OCR.

History is PARTIAL. Three HVAC component series contain one point each. Older values include connector previews, not complete downloaded histories; source links may identify the series rather than exact rows. Unknown publication dates remain blank; secondary publication dates are not certified first availability. No live scraper, shared/authenticated database, ISM forecast or equity-factor engine is deployed. Syntax/logic testing is not browser validation.

## Indicator goals
ISM manufacturing/services; S&P US manufacturing/services; NY Empire, Philadelphia, Richmond, Dallas, Kansas City manufacturing and eventual regional services; Dodge Momentum Index (DMI); AHRI AC, heat pumps, combined total and gas furnaces; housing starts and separately Dodge dollar-volume construction starts; AIA Architecture Billings Index; NFIB optimism.

## Non-negotiable data rules
Prefer official APIs/bulk/archives; use credible release articles, trade news and calendars for gaps. Respect licensing/paywalls/rate limits. Public headlines do not authorize full proprietary dataset redistribution. Every value needs reference month, units/seasonal adjustment, provenance, edition/revision, retrieval time when available and verified publication time. Do not invent dates or numbers. Distinguish actuals, forecasts, prior comparators, flash/final and YTD. Preserve original/revised vintages and conflicts. Reconcile previews before modeling. Display loaded coverage/counts/gaps/staleness; break lines across missing months. Single points are not history. MoM/YoY require exact calendar matches. Housing units != construction dollars; KC composite != production; AHRI combined includes both components.

## Research goal
Map report -> indicator -> industry -> ticker -> analyst view. Preserve actual publication date, author/broker, original, exact evidence/page, thesis, forecasts and review status. No dates inferred from file/upload metadata. Future LLM extraction requires analyst approval. Keep private documents out of Git.

## Modeling roadmap
ISM: release-aware snapshots, lagged ISM/regional inputs, baseline versus OLS/ridge, rolling/expanding walk-forward validation, training-fold preprocessing/tuning, labels available by cutoff, OOS MAE/RMSE and uncertainty. Current data is NOT automatically vintage-safe.
Equities: adjusted FMP historical RETURNS; quotes separate from EOD fits. Regress returns on market/sector returns, yield CHANGES and credit/FX/commodity controls. 252/504/756 aligned-session windows, confidence intervals and impact per +100bp. On identical samples report rate-only, full/adjusted, incremental (full minus controls-only) and partial R2 ((SSE_controls-SSE_full)/SSE_controls). Do not imply causality or tradable forecasts.

## Development priorities
1. Expand/reconcile sparse histories and provenance.
2. Add repeatable versioned ingestion with verified release availability.
3. Add vintage-safe ISM modeling, then equity factors and authenticated shared storage.
Test CSV quoting, dates/values/URLs, revisions/editions, duplicate handling, gap segments and uploads; future tests include look-ahead exclusion and same-sample R2. Run browser tests before claiming UI validation. Never claim a scrape/push/deployment is complete without verification. No tokens/.env/temporary signed URLs in Git. External writes require explicit approval. Chat credentials do not transfer to a deployed app.
