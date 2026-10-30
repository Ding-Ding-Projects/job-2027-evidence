# Roadmap

## Publication

- [x] Review the current source capture inventory. The latest source build has no built/current capture set; no older image is presented as current.
- [x] Verify the existing public gallery on `main`: 41 manifest images returned HTTP 200 and matched their published SHA-256 values; the GitHub Pages source is `main:/docs`.
- [x] Add 20 historical workspace images from source commits `a44073e5d776fe9dd2606f8fe96720b7c89accaf` and `b022de6ba3a2bb03eb067e6a956991070ab6662e` with original bytes, inspected pixels, neutral captions, and per-image evidence limits. PR #5 is merged on `main`.
- [ ] Publish 16 inspected original images for inactive-attempt deletion and its Help article, source-bound to `8ed63931ec0c6d6ebef88e456388309473e0d0fa` and `de3b91d398dd1e86c12ffbc5f5ce31db43c0908`; local build and language scan pass, PR #6 is open and requires one approving review; its required PR-target scan passed, while the first push-event scan could not resolve an event base. Protected integration and live verification remain pending.
- [ ] Verify the updated live home, provenance page, all 77 image routes, and byte hashes after the Pages rebuild.
- [x] Keep two reviewed source captures withheld because they show an unrelated provider identity or third-party item identifier that could not be verified as synthetic.
- [x] Read back the GitHub About homepage field and verify its exact value matches the deployed home URL.
- [ ] Have the source project owner add the gallery link to the source README and verify it from the source repository after that work is integrated.

## Evidence limits

- [ ] Complete layout, keyboard, and screen-reader acceptance remain unverified.
- [ ] Cantonese coverage is partial.
- [ ] Productive-workspace, native application, and worker runtime acceptance are outside this gallery's evidence.
- [ ] Broader interface design, required feature coverage, complete documentation and wiki inventory, and companion package acceptance remain unverified.

## Publication enforcement, 2026-10-20

- [x] Add local commit/push entrypoints, trusted-scanner workflow and externally protected input configuration.
- [ ] Verify the complete tracked source, local negative/positive behavior, real hosted run and required branch protection.
- [x] Implement and independently review outgoing-ancestor checks, including removed intermediate content and filenames; actual repository enforcement is verified separately.
