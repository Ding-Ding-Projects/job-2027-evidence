# Job 2027 evidence gallery closeout

Task: publish reviewed historical inactive-attempt deletion and Help article captures in the existing gallery.

Task branch: `ai/feature/20261030-job-gallery-refresh`
Candidate commit: `b11e9ad35dc80ba51ae269c07785d2dc5aec5be3`
Pull request: #6, https://github.com/Ding-Ding-Projects/job-2027-evidence/pull/6

The complete image inventory has 77 entries: the existing 61 plus 13 deletion workflow captures from source `8ed63931ec0c6d6ebef88e456388309473e0d0fa` and 3 Help article captures from source `de3b91d398dd1e86c12ffbc5f5ce31db43c0908`. The full path, SHA-256, timestamp/time zone, viewport/DPR, source/build binding, synthetic-data note, and limitations are recorded in `docs/captures.json`. The earlier Help frame is labeled historical.

Verified locally: root `build.bat` passed and assembled 77 PNGs; the publication-language scan passed. The PR-target publication-language run `41091956679` passed. The first push-event run `41091608131` failed before scanning because GitHub supplied an unknown event base. The pull request is open and mergeable, but repository protection requires one approving review; auto-merge is disabled.

The live URL remains `https://ding-ding-projects.github.io/job-2027-evidence/`, serving the previous gallery until the protected merge and Pages rebuild. After approval and merge, verify the deployed home/provenance pages, all 77 image routes and hashes, and the About homepage.

Excluded: three setup/provider images withheld because visible third-party identifiers could not be confirmed as synthetic; private source files and raw operational receipts. No current-source, native Windows DPI, full accessibility, installation or release claim is made.
