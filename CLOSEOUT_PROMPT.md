# Job 2027 evidence gallery closeout

Task: add reviewed historical inactive-attempt deletion and Help article captures to the existing public gallery.

Task checkout: `ai/feature/20261030-job-gallery-refresh`
Starting `main` SHA: `6de73f7ef63cf9842690abe8dee0e4209e08c7b6`

The 13 deletion workflow PNGs are bound to source `8ed63931ec0c6d6ebef88e456388309473e0d0fa`; the 3 Help PNGs are bound to source `de3b91d398dd1e86c12ffbc5f5ce31db43c0908`. They were copied byte for byte after visual inspection. Public metadata records image SHA-256, validated capture timestamp and timezone, dimensions, viewport, build manifest hash, synthetic data, and evidence limits. The earlier Help alternate remains identified as historical.

Verified: exact root `build.bat` passed and assembled 77 images; the publication-language scan and git diff check passed after correction.

Pending: commit and push this branch, integrate through the protected route, verify the Pages build, inspect the deployed home and provenance pages, verify all 77 image routes and hashes, and read back the exact About homepage. The deployed home URL is `https://ding-ding-projects.github.io/job-2027-evidence/`. No current-source, native Windows DPI, headless GUI input, installation, release or full visual-acceptance claim is made.

Excluded: three provider/setup images withheld by the source review because their visible third-party identifiers could not be verified as synthetic; private source files, raw operational receipts, machine paths and credentials.
