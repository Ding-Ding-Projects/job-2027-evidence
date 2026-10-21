# Job 2027 evidence gallery

Open the [evidence gallery](https://ding-ding-projects.github.io/job-2027-evidence/) to browse reviewed original interface images. The [gallery guide](https://ding-ding-projects.github.io/job-2027-evidence/wiki.html) explains search, filters, evidence labels, and limits. The [provenance register](https://ding-ding-projects.github.io/job-2027-evidence/provenance.html) lists source bindings, timestamps, dimensions, and image hashes.

The source application remains private. This public repository contains only reviewed original PNG files, neutral captions, and safe evidence metadata. The latest added set contains 23 images from the current source review plus three historical original-file-save states. Three full-page settings images were withheld because provider-configuration values could not be independently verified as safe. All published records use synthetic examples.

The latest profile run recorded 18 layout tuples and separately failed the browser-title persistence check. Four terminology images were captured before a startup failure and do not prove persistence. A separate paused API record could not be associated conclusively with the visible ready state. These findings remain explicit in the gallery and provenance page.

Run `build.bat` to verify every listed PNG hash and assemble the static output into `dist/`. `build-installer.bat` reports that installer production is not applicable to this static gallery.

## Publication checks

The repository uses local publication-language hooks and a trusted GitHub Actions scan. The workflow receives protected policy data through the repository secret and does not include that private data in source, diagnostics, or public releases. The hosted check runs after a push and cannot cancel that push; branch protection and the current run state must be checked separately.
