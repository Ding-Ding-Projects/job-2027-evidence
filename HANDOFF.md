# Public evidence handoff

## Historical workspace evidence update

The task branch `codex/historical-workspace-evidence-20261023` adds 20 byte-preserving historical workspace images: 8 from source `a44073e5d776fe9dd2606f8fe96720b7c89accaf` and 12 from source `b022de6ba3a2bb03eb067e6a956991070ab6662e`. Their capture hashes match the current private capture inventory, the source pixels were inspected, and their public metadata identifies source, artifact, capture timestamp, viewport, synthetic-data status, and limits. The latest source build has no current capture set; none of these older images is presented as current.

The existing main gallery had 41 images. A live readback verified that all 41 manifest routes returned HTTP 200 with matching bytes. The existing 23-image pre-plane set also matches the historical `b2c877c` source originals. Eleven account-flow images match source `ce7d22c`; four color-plane images remain bound only to an artifact digest because their exact source commit is unavailable. Those pre-existing images remain unchanged except that the account-flow source binding is added to the metadata.

Two source captures remain withheld: an unrelated provider-identity screen and a companion setup screen, each with a third-party item identifier that could not be confirmed as synthetic. A separate open PR #4 from `ai/feature/20261021-current-evidence-update` remains untouched because its images are absent from the current source capture inventory.

## Evidence limits and remaining work

The new historical image set is local to this task branch. The required `publication-language` check, PR review, merge, Pages rebuild, live image routes, final main SHA, and post-merge provenance readback are pending. No product build or runtime is claimed. The current page and all original gallery images on main remain available. The exact About homepage readback is `https://ding-ding-projects.github.io/job-2027-evidence/`.

The source project owner separately owns adding that deployed gallery URL to the private source README and verifying the integrated link.

## Historical published-evidence record

Earlier task handoffs remain below this line in version-control history.
