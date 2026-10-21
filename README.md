# Job 2027 evidence gallery

This gallery preserves reviewed original images from the documentation companion and synthetic workspace previews. It does not publish the private application source.

Open the [gallery home page](https://ding-ding-projects.github.io/job-2027-evidence/) to browse the latest built color-plane preview, the pre-plane historical set, and the earlier documentation images. [Provenance and limits](https://ding-ding-projects.github.io/job-2027-evidence/provenance.html) records safe per-image metadata and the reasons historical images were not promoted.

The latest four images are bound to build artifact `sha256:813a454083076d4df6cbfe2be3d98623f0dc06fb28a48d0e6fcbf1aa003e94ae`. The build receipt has no source commit, and the gallery does not infer one. The 23-image pre-plane set is bound to artifact `sha256:b316cfde243571354b5892945938969cec42c9f2a86a1301ff606aa93c0c3e04`. All workspace preview data is synthetic.

Run `node scripts/build.mjs` to validate original image hashes and assemble the static gallery into `dist/`.

## Publication checks

Install the maintainer-managed local tooling before contributing. Configure `git config core.hooksPath .githooks`. The commit and push hooks scan staged or outgoing source and fail closed when required protected rules are unavailable. The workflow uses a trusted scanner pinned by `PUBLICATION_SCAN_POLICY_SHA`, with rule data supplied through `PUBLICATION_LANGUAGE_DATA` in repository secrets. Hosted checks run after transmission; required branch protection is verified separately. These checks do not establish image-pixel privacy or rewrite historical records.
