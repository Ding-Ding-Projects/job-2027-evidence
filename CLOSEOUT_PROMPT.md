# Job 2027 evidence gallery closeout

Task: publish fourteen reviewed source-bound images and create one normal static gallery release.

Integrated main: 9ba1d32ace113ec051dea86f8cb81d096f264ecc. PR #11 is merged and issue #9 is closed. The matching Publication language scan and Pages build both completed successfully.

Live verification: home and provenance returned HTTP 200; the public manifest contains 91 entries; all fourteen new image routes returned HTTP 200 and exact source SHA-256 values; About homepage reads back as https://ding-ding-projects.github.io/job-2027-evidence/.

Release selection: version 2026.11.15, tag gallery-2026.11.15, code name Classic Har Gow · 蝦餃. The published photo URL and pending static archive entry are recorded in README.md, CHANGELOG.md, and docs/index.html. The normal release and downloadable ZIP are not yet published.

Known limitation: the visible product version remains unavailable. The public gallery homepage has an optional JavaScript search handler but no visible search field; full regex search and broader feature parity are unverified.

Remaining: prepare a clean static archive from the exact main SHA, publish one normal release with the ZIP attached, and read back tag, target, normal-release state, asset hash, public download, and source binding. No installer applies because this is a static gallery with no installed product.