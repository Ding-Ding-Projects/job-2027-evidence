# Job 2027 evidence gallery

This gallery presents reviewed original images from synthetic workspace previews and current account workflows. It publishes visual evidence only; the application source remains private.

Open the [gallery home page](https://ding-ding-projects.github.io/job-2027-evidence/) to browse current workspace and account captures, the color-plane preview, earlier workspace sets, and historical documentation images. [Provenance and limits](https://ding-ding-projects.github.io/job-2027-evidence/provenance.html) records per-image details, timestamps only where supported by the reviewed source record, and publication limits.

The 11 current workspace and account images preserve their original PNG bytes and have neutral captions with explicit limits. Their source revision and local file paths are not published. One setup image was withheld because its visible third-party item identifier could not be verified as synthetic. The earlier 23-image pre-plane set remains bound to artifact `sha256:b316cfde243571354b5892945938969cec42c9f2a86a1301ff606aa93c0c3e04`. All displayed workspace and account preview data is synthetic.

Run `node scripts/build.mjs` to validate original image hashes and assemble the static gallery into `dist/`.

## Publication checks

Install the maintainer-managed local tooling before contributing. Configure `git config core.hooksPath .githooks`. The commit and push hooks scan staged or outgoing source and fail closed when required protected rules are unavailable. The workflow uses a trusted scanner pinned by `PUBLICATION_SCAN_POLICY_SHA`, with rule data supplied through `PUBLICATION_LANGUAGE_DATA` in repository secrets. Hosted checks run after transmission; required branch protection is verified separately. These checks do not establish image-pixel privacy or rewrite historical records.
