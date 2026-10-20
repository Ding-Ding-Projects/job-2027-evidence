# Job 2027 documentation evidence

This public gallery contains three reviewed, source-bound images from the documentation companion. It does not publish the private application source or claim full application acceptance.

## Browse the evidence

Open the [gallery home page](https://ding-ding-projects.github.io/job-2027-evidence/) to filter the three images by language or state. The [provenance and limits page](https://ding-ding-projects.github.io/job-2027-evidence/provenance.html) records safe hashes, UTC capture times, scope, exclusions, and remaining verification gaps.

The source state is `21520775aa46ef70751e24de7a6abab60ec1ab76`. The gallery is limited to the documentation companion: Cantonese localization is partial, and complete layout, keyboard, and screen-reader acceptance remain unverified. These images do not show the productive workspace.

This gallery does not establish the broader interface design, required feature coverage, complete documentation and wiki inventory, or companion package acceptance.

## Build

Run `build.bat` to validate the reviewed image hashes and assemble the static pages into `dist/`. There is no installable product in this repository, so `build-installer.bat` reports non-applicability with a nonzero result.

## Publication checks

Install the maintainer-managed local tooling before contributing. Configure `git config core.hooksPath .githooks`. The commit and push hooks scan the staged or outgoing immutable source and fail closed when the required protected rules are unavailable. The workflow runs a trusted scanner pinned by `PUBLICATION_SCAN_POLICY_SHA`, with rule data supplied through `PUBLICATION_LANGUAGE_DATA` in repository secrets. Candidate source is read as data. A hosted check runs after transmission; required branch protection must be verified separately. These checks do not establish image-pixel privacy or rewrite historical records.
