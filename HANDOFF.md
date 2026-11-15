## 2026-10-30 inactive-attempt deletion gallery publication

Pull request #6 integrated into `main` at `cf835d390368ccd7d21e84f6d3ab008ec2be52db`. The root `build.bat` assembled 77 original PNGs. The local publication-language scan and the latest branch-update and PR-target GitHub Actions checks passed. The first new-ref workflow failed before scanning because its event base was unknown; a later branch-update workflow passed.

The live home and provenance routes returned HTTP 200. The deployed `docs/captures.json` contains 77 entries, and all 77 image routes matched their recorded SHA-256 values. The About homepage reads `https://ding-ding-projects.github.io/job-2027-evidence/`, matching the live home.

Five source captures remain withheld: three settings views whose provider-configuration values could not be independently verified as safe, and two earlier views containing third-party item identifiers that could not be confirmed as synthetic. The gallery does not claim current-source capture, native DPI, full keyboard/screen-reader acceptance or installation/release evidence. The source README backlink remains parent-owned.

## 2026-11-15 source-bound gallery update

The task branch ai/feature/20261115-ui-gallery adds fourteen byte-identical original images: one extension run-controls view, eleven synthetic workflow views, and two companion initial views. The manifest now records 91 images. New image hashes, source revisions, timestamps, dimensions, artifact digests, and evidence limits are in docs/captures.json and docs/provenance.html.

The frontend workflow captures are bound to source revision 8c47293922eefc8fbf2974f14aca9d85740144de and artifact sha256:84be44f8d41510a5d39cf05e4e7565494821835cf8132ac485af170ee1f244b4. Visible product version information is unavailable. The extension image is bound to source revision a0277e93c1e5b4aaecb696e843d5dbff52e2464e and package sha256:aff7467b6ec64c07d3d427af5f247ec7f5ca5b0b17ffa35f4f737ded5ea8ad8d. The two companion images are bound to 3519a28891aead46753d8b32405c6cde273ea51f and their separate portable hashes.

Three unique frontend settings images containing a loopback API origin remain withheld. Seven remaining extension candidates, two unaccepted Help article candidates, 341 source images absent from the current manifest, and unreviewed native build image sets remain withheld with exact reasons in the provenance page. Existing generated announcement images remain excluded.

Before integration, run the required static-gallery build entrypoint to verify image hashes, inspect the diff, and pass the publication-language scan. After Pages deploys, verify the home, provenance page, and all fourteen image routes without authentication; compare each live image SHA-256 with the manifest; read back the About homepage. The 2026-11-15 publication remains incomplete until those steps pass. The source README backlink already exists and was read back by the source owner.
## Publication-language run 43700957904

The first task-branch push produced a red publication-language workflow before candidate scanning began. Run 43700957904 was bound to source commit 24a432d8296ef0ee7e87e37f6e08495a279e4ee3. The push event supplied BASE_SHA=0000000000000000000000000000000000000000, and the exact log line was: Event base publication is unknown. The job exited with code 2. No source-text finding was reported because the scan step was not reached.

The local pre-commit hook passed its publication-language scan with no findings. A genuine follow-up branch update is needed to produce a valid event base; read back the next hosted scan result and require its actual terminal verdict before opening or merging a pull request. The live Pages content remains unchanged.
## Follow-up publication-language run 43701760301

A genuine branch update supplied BASE_SHA=24a432d8296ef0ee7e87e37f6e08495a279e4ee3 for candidate 37e21d1d7098fe44293d887958a273a2316e5230. Run 43701760301 completed successfully with scope event-base-relative-history, historyProof=true, scannedRevisions=1, and findings=[]. The failed first-new-ref run remains recorded above.

The local source now includes this recorded retry result. The follow-up documentation update is still not integrated or deployed; verify its own hosted scan, then continue to main and Pages checks.
## 2026-11-15 live gallery verification

Pull request #11 merged into main at 9ba1d32ace113ec051dea86f8cb81d096f264ecc. Publication-language run 43702916808 and Pages build 43702916258 completed successfully for that exact source. The public home, provenance page, and captures.json each returned HTTP 200. The live manifest contains 91 images, and all fourteen new image routes returned HTTP 200 with byte-for-byte SHA-256 matches to their reviewed originals. The About homepage reads back as https://ding-ding-projects.github.io/job-2027-evidence/.

The visible product version remains unavailable. The public page has a JavaScript search handler but no visible search input; full regex search and broader site feature parity remain unverified.

The static release section and changelog map version 2026.11.15 to Classic Har Gow · 蝦餃 and link the uploaded public photo, without copying it. The normal static ZIP release, exact source-target tag, downloadable asset hash, and final release readback remain pending.
## Static gallery release

Version 2026.11.15 is assigned the previously unused catalog code name Classic Har Gow · 蝦餃. The code name photo is linked from its public catalog release at https://github.com/Ding-Ding-Projects/dim-sum-photos/releases/download/catalog-v1/hk-dish-0001-classic-har-gow.png; the photo is not copied into this repository. A normal static ZIP release with tag gallery-2026.11.15 is pending, and this repository has no installable product.

# Historical published-evidence record

Earlier task handoffs remain below this line in version-control history.
