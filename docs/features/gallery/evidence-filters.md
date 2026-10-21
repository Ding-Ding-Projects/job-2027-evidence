# Search and filter evidence

## Use the filters

The gallery and provenance register share a collapsible search and filter panel. Filter by category, appearance, language mode, or viewport, then refine the visible set with plain text. The result count reports the number of matching records.

The panel's collapsed state, search string, selected filters, and appearance choice are saved in the current browser's local storage. Clearing filters restores the complete collection. These values do not leave the page.

## Evidence behavior

Every visible card remains linked to its original PNG. Filtering changes only which records are shown; it does not alter image bytes or their source metadata. A card labels the source revision, viewport, capture timestamp basis, source image digest, PNG dimensions, and SHA-256.

## Limits and verification

The gallery displays synthetic records. The image is visual evidence for one state, not proof of interactions or production behavior. A missing timestamp remains unavailable, and a timestamp without a recorded timezone is labeled that way. The local build validates every published PNG against its recorded SHA-256.
