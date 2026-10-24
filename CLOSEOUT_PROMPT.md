# Continue historical evidence publication checks

The public evidence gallery task branch `codex/historical-workspace-evidence-20261023` adds 20 original historical workspace images from the reviewed private source inventory: 8 from `a44073e5d776fe9dd2606f8fe96720b7c89accaf` and 12 from `b022de6ba3a2bb03eb067e6a956991070ab6662e`. Every copied image matches its source SHA-256 and has been visually inspected. Public captions and records identify each image as historical, synthetic, and limited to the displayed state. The latest source build has no current captures, and no older image is presented as current.

Two source captures are withheld because they show unrelated provider identity or third-party item identifiers that could not be confirmed as synthetic. The existing open PR #4 on `ai/feature/20261021-current-evidence-update` remains untouched because its images are not present in the current source inventory.

Before completion, confirm the required `publication-language` check and review on the task PR, merge through the protected route, then verify the public main SHA, Pages build, home and provenance pages, all 61 image routes, original image hashes, and exact About homepage. The source project owner separately verifies the gallery link in the private source README. No product build or runtime is claimed.
