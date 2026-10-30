# Job 2027 evidence gallery

This gallery presents reviewed original images from synthetic workspace previews and historical account-flow captures. The source application remains private. No image in the gallery represents the latest source build because that source has no built capture set.

Open the [gallery home page](https://ding-ding-projects.github.io/job-2027-evidence/) to browse the deletion workflow, its Help article, dated workspace snapshots, account-flow views, color-plane preview, pre-plane images, and historical documentation captures. [Provenance and limits](https://ding-ding-projects.github.io/job-2027-evidence/provenance.html) records each image's source revision when available, build artifact, capture time, image hash, and evidence limits.

The gallery contains 77 original PNGs: 3 documentation images, 23 pre-plane workspace images, 4 color-plane images bound to an artifact digest whose source commit is unavailable, 11 account-flow images from source `ce7d22cbcd2813f2d55e5907f137738b38bb2723`, 8 historical integration-baseline images from source `a44073e5d776fe9dd2606f8fe96720b7c89accaf`, and 12 historical workspace images from source `b022de6ba3a2bb03eb067e6a956991070ab6662e`, 13 inactive-attempt deletion workflow images from source `8ed63931ec0c6d6ebef88e456388309473e0d0fa`, and 3 Help article images from source `de3b91d398dd1e86c12ffbc5f5ce31db43c0908`. The 20 newly added historical workspace images preserve their original PNG bytes. Captions identify synthetic data and state what each image does not prove.

Five source captures remain withheld. Three full-page settings views were withheld because provider-configuration values could not be independently verified as safe. Two earlier captures remain withheld because a setup screen and a provider-identity screen each show a third-party item identifier that could not be confirmed as synthetic. Their values and pixels are not published. The gallery's existing account-flow and color-plane images are older snapshots; they are not relabeled as the latest source. The latest source update has no built captures.

Run `node scripts/build.mjs` to validate original image hashes and assemble the static gallery into `dist/`.

## Publication checks

Install the maintainer-managed local tooling before contributing. Configure `git config core.hooksPath .githooks`. The commit and push hooks scan staged or outgoing source and fail closed when required protected rules are unavailable. The workflow uses a trusted scanner pinned by `PUBLICATION_SCAN_POLICY_SHA`, with rule data supplied through `PUBLICATION_LANGUAGE_DATA` in repository secrets. Hosted checks run after transmission; required branch protection is verified separately. These checks do not establish image-pixel privacy or rewrite historical records.
