## 2026-10-30 inactive-attempt deletion evidence gallery update

Prepared on `ai/feature/20261030-job-gallery-refresh` from the verified `main` tip `6de73f7ef63cf9842690abe8dee0e4209e08c7b6`. Added 13 original deletion-workflow PNGs and 3 Help article PNGs, preserving source bytes and adding source/image hashes, validated timestamps, America/Toronto timezone, viewport, browser route and limits. All 16 images were visually inspected. Source revisions are `8ed63931ec0c6d6ebef88e456388309473e0d0fa` and `de3b91d398dd1e86c12ffbc5f5ce31db43c0908`. No current-source claim is made.

The root `build.bat` passed and assembled 77 images. The publication-language scan caught private wording in the draft handoff and metadata; those lines were corrected before any commit landed. The gallery is not yet live: this change still needs integration, the Pages rebuild, and readback of all 77 image routes and hashes.

# Public evidence handoff

## Historical workspace evidence update

The task branch `codex/historical-workspace-evidence-20261023` adds 20 byte-preserving historical workspace images: 8 from source `a44073e5d776fe9dd2606f8fe96720b7c89accaf` and 12 from source `b022de6ba3a2bb03eb067e6a956991070ab6662e`. Their capture hashes match the current private capture inventory, the source pixels were inspected, and their public metadata identifies source, artifact, capture timestamp, viewport, synthetic-data status, and limits. The latest source build has no current capture set; none of these older images is presented as current.

The existing main gallery had 41 images. A live readback verified that all 41 manifest routes returned HTTP 200 with matching bytes. The existing 23-image pre-plane set also matches the historical `b2c877c` source originals. Eleven account-flow images match source `ce7d22c`; four color-plane images remain bound only to an artifact digest because their exact source commit is unavailable. Those pre-existing images remain unchanged except that the account-flow source binding is added to the metadata.

Two source captures remain withheld: an unrelated provider-identity screen and a companion setup screen, each with a third-party item identifier that could not be confirmed as synthetic. A separate open PR #4 from `ai/feature/20261021-current-evidence-update` remains untouched because its images are absent from the current source capture inventory.

## Evidence limits and remaining work

PR #5, `https://github.com/Ding-Ding-Projects/job-2027-evidence/pull/5`, contains commit `133fdb89e8b862837528d24785db09c0c6e97473`. Its pull-request `publication-language` run `40054896688` passed. The first push-event run `40054756808` failed before scanning because its new-ref event supplied a zero base SHA (`Event base publication is unknown.`). Branch protection still reports `BLOCKED`, so integration is not authorized by the current check state. A factual handoff update on the existing task branch will create a new push event with a known previous head; its required run must pass before the protected merge.

After that check, merge through the protected route, then verify the main commit SHA, Pages rebuild, public home and provenance pages, all 61 image routes, and the final About homepage value. No product build or runtime is claimed. The current page and all original gallery images on main remain available at `https://ding-ding-projects.github.io/job-2027-evidence/`.

The source project owner separately owns adding that deployed gallery URL to the private source README and verifying the integrated link.

## Historical published-evidence record

Earlier task handoffs remain below this line in version-control history.
