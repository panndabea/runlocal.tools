# Priority Implementation Tools

Status: canonical implementation backlog  
Last updated: 2026-07-04  
Related docs: `docs/Product-Strategy.md`, `docs/Roadmap.md`, `docs/PRD.md`

## Purpose

This document turns the broad tool idea list into an implementation-oriented backlog for runlocal.tools.

The list is intentionally prioritized by product fit, browser plausibility, privacy value, and usefulness for repeat local file work. It should guide what gets built after the shared tool shell and existing live routes are stable.

## Priority Meaning

- P0: Core product surface. These tools define the local-first promise.
- P1: High-frequency adjacent tools. Build after the shared shell is stable.
- P2: Strong later bets. Useful, but more complex or less foundational.
- P3: Deferred or exploratory. Keep as ideas, but do not let them distract the core product.

## Recommended Implementation Queue

These are the strongest near-term implementation candidates.

| Order | Tool | Category | Route Idea | Status | Why now |
|---|---|---|---|---|---|
| 1 | Image Resize | Images | `/images/resize/` | Next | Directly extends the current image suite and is highly feasible in-browser. |
| 2 | Image Convert | Images | `/images/convert/` | Next | Shares most primitives with resize and compress. |
| 3 | Image Compress | Images | `/images/compress/` | Next | High everyday utility and clear local privacy story. |
| 4 | Image Crop | Images | `/images/crop/` | Next | Completes the basic image editing set. |
| 5 | File Hash | Files | `/files/hash/` | Next | Strong bridge to receipts, verification, and trust. |
| 6 | HAR Cleaner | Networking | `/data/har-cleaner/` | Next | Excellent developer/privacy use case with low implementation risk. |
| 7 | JSON Inspector | Data | `/data/json-inspector/` | Next | Complements the existing JSON formatter. |
| 8 | JSON Validator | Data | `/data/json-validator/` | Harden | Validation exists inside JSON Formatter; decide whether to split into its own route. |
| 9 | PDF Merge | PDF | `/pdf/merge/` | Later | Strong privacy use case, but needs PDF primitives. |
| 10 | PDF Split | PDF | `/pdf/split/` | Later | Natural pair with PDF Merge. |
| 11 | Bulk Rename | Files | `/files/bulk-rename/` | Later | Useful, but browser file-write UX needs careful design. |
| 12 | Safe Share Pack | Files | `/files/safe-share-pack/` | Later | Perfect composition demo: strip metadata, rename, archive, hash. |

Already live routes that should keep being hardened: Image Merge, Strip Image Metadata, CSV to JSON, JSON to CSV, JSON Formatter, Receipt Verification.

## P0 Core Tools

| Category | Tool | Problem | Solution and Benefit | Why Local | Feasibility | Priority |
|---|---|---|---|---|---|---|
| Images | Merge Images | Many screenshots or images need to become one output. | Combine multiple images horizontally, vertically, or automatically. | Files stay private, no upload needed. | High | P0 |
| Images | Strip Metadata | EXIF, GPS, author, or software metadata should be removed. | Re-encode visible pixels without embedded metadata. | Classic privacy workflow. | High | P0 |
| Images | Resize | Images are too large for web, slides, or email. | Resize by dimensions and presets. | Fast browser-side operation. | High | P0 |
| Images | Convert | PNG, JPG, WebP, or AVIF formats need switching. | Format conversion with quality controls. | Simple local transformation. | High | P0 |
| Images | Compress | Image files are too large. | Quality slider and target-size compression. | No third-party processing needed. | High | P0 |
| Images | Crop | Social, docs, and slides need clean image crops. | Freeform and ratio-locked crop controls. | User keeps visual control locally. | High | P0 |
| Data | CSV to JSON | CSV needs to become usable in APIs or JavaScript. | Parse CSV with delimiter and export modes. | Datasets do not leave the device. | High | P0 |
| Data | JSON to CSV | JSON needs to become useful in spreadsheets or BI tools. | Convert arrays, objects, and row data to CSV. | Common developer and operations task. | High | P0 |
| Security | Receipt Verifier | Receipts and execution metadata need verification. | Verify hashes and tool metadata. | Proof without exposing private file contents. | High | P0 |

## P1 High-Frequency Tools

| Category | Tool | Problem | Solution and Benefit | Why Local | Feasibility | Priority |
|---|---|---|---|---|---|---|
| Images | Annotate | Screenshots need quick markup. | Add arrows, boxes, blur, and text. | Private screenshots stay local. | High | P1 |
| Images | Batch Rename Images | Camera and screenshot names become chaotic. | Rename image sets with tokens. | File names do not leak. | High | P1 |
| Images | Contact Sheet | Many images need quick review. | Generate thumbnail sheets. | Ideal for local folders. | High | P1 |
| Data | JSON Format | Raw JSON is hard to read. | Prettify, minify, and sort keys. | Typical local developer work. | High | P1 |
| Data | JSON Validate | JSON errors are hard to find. | Parse and pinpoint errors. | Immediate local feedback. | High | P1 |
| Data | CSV Clean | Delimiters, spaces, and quotes are messy. | Normalize CSV structure. | Avoids data leaks. | High | P1 |
| Data | TSV/PSV Converter | Table formats need switching. | Convert between common delimiters. | Local text workflow. | High | P1 |
| Data | Deduplicate Rows | Data exports contain duplicates. | Remove rows by unique key or fuzzy match. | Data stays internal. | Medium | P1 |
| Data | Column Mapper | Columns need renaming or reordering before import. | Map, rename, and reorder columns. | Very common before uploads. | High | P1 |
| PDF | Merge PDF | PDF files need to be combined. | Drag-sort documents and export one PDF. | Private documents stay local. | Medium | P1 |
| PDF | Split PDF | Large PDFs need to be separated. | Extract ranges or individual pages. | Upload is unnecessary. | Medium | P1 |
| PDF | Extract Pages | Only selected pages are needed. | Page picker and subset export. | Documents remain local. | Medium | P1 |
| PDF | Reorder PDF | PDF pages are in the wrong order. | Drag and reorder pages. | Ideal local operation. | Medium | P1 |
| PDF | PDF to Images | PDF pages are needed as PNG or JPG. | Render pages to image files. | Useful for presentations and archives. | Medium | P1 |
| PDF | Metadata Inspect | Hidden PDF metadata needs review. | Reveal and optionally remove metadata. | Local compliance helper. | Medium | P1 |
| Markdown | Markdown Preview | Markdown needs quick preview. | Live side-by-side render. | Private docs stay local. | High | P1 |
| Markdown | MD to HTML | Markdown needs web or newsletter export. | Clean single-file HTML export. | No upload needed. | High | P1 |
| Markdown | Table Builder | Markdown tables are awkward to edit. | Visual table editor. | Useful for local docs. | High | P1 |
| Markdown | Frontmatter Editor | YAML metadata needs maintenance. | Form-based frontmatter editor. | Content stays local. | High | P1 |
| Markdown | TOC Generator | Long Markdown files need structure. | Scan headings and generate table of contents. | Works directly on local documents. | High | P1 |
| Files | Bulk Rename | File names are chaotic. | Token-based rename preview and export. | Naming patterns remain local. | High | P1 |
| Files | File Hash | File integrity needs proof. | SHA-style hashes and exportable manifests. | Strong fit for receipts and compliance. | High | P1 |
| Files | Checksum Verify | Downloaded artifacts need verification. | Compare expected and actual checksums. | Security and operations value. | High | P1 |
| Files | Archive Extract | ZIP or TAR archives need inspection. | Browse and extract selected files. | Upload is unnecessary. | Medium | P1 |
| Files | Archive Create | Multiple files need bundling. | Create ZIP or TAR archives locally. | Useful for local sharing. | Medium | P1 |
| Files | File Compare | Files need binary, text, or metadata comparison. | Compare fingerprints, size, and metadata. | Fast local diagnosis. | Medium | P1 |
| Files | MIME Inspector | File type is unclear. | Sniff type and show metadata. | Local troubleshooting. | High | P1 |
| Files | Safe Share Pack | Files need safe preparation before sending. | Strip metadata, rename, archive, and hash. | Strong pipeline story. | High | P1 |
| Coding | Code Format | Code snippets need cleanup. | Prettier-like local formatting. | Avoid code uploads. | High | P1 |
| Coding | Regex Tester | Regex needs quick testing. | Live match and highlight UI. | Classic developer utility. | High | P1 |
| Coding | Base64/Hash Playground | Encodings and hashes need inspection. | Convert, hash, and inspect. | Local is enough. | High | P1 |
| Coding | Env Sanitizer | `.env` files need safe sharing. | Redact secrets and export templates. | Secrets stay local. | High | P1 |
| Coding | Log Redactor | Logs contain secrets or personal data. | Pattern-based redaction. | Security relevant. | High | P1 |
| Networking | HAR Cleaner | HAR files contain cookies, headers, and tokens. | Scrub sensitive fields. | Excellent local privacy case. | High | P1 |
| Security | Secret Scanner | Files may contain accidental secrets. | Local pattern scanner. | Sensitive files never upload. | High | P1 |
| Automation | Batch Pipeline Builder | Repeated steps need reuse. | Visual local workflow chain. | Central product lever once core tools exist. | Medium | P1 |
| Automation | Preset Packs | Teams need consistent settings. | Save and load local presets. | Supports repeat workflows. | High | P1 |
| Benchmarking | Browser Tool Benchmark | Local performance needs visibility. | Measure transform time and output size. | Helps improve the product itself. | High | P1 |
| Browser | Install as App | The site should feel app-like. | Installable PWA shell. | Fits local-first positioning. | Medium | P1 |
| Browser | Local Projects | Single runs lose context. | Save sessions and projects locally. | Improves repeat use. | Medium | P1 |
| Browser | Share Preset URL | Tool settings should be shareable. | Route with non-sensitive prefilled params. | Strengthens shareability. | High | P1 |
| Browser | Clipboard Ingest | Paste is often faster than file selection. | Paste images, text, and file flows. | Reduces friction. | High | P1 |
| Browser | Offline Starter Pack | Poor connection should not block core tools. | Precache core tools. | Makes local-first real. | Medium | P1 |

## P2 Strong Later Bets

| Category | Tool | Problem | Solution and Benefit | Why Local | Feasibility | Priority |
|---|---|---|---|---|---|---|
| Images | Background Remove | Simple product or portrait cutouts are needed. | On-device segmentation via WASM or WebGPU. | Sensitive images stay local. | Medium | P2 |
| Data | Diff Tables | Two exports need comparison. | Row and column diff with highlights. | Business data stays local. | Medium | P2 |
| Data | Sample Data Generator | UI and API demos need data. | Generate synthetic test data. | Avoids real data. | High | P2 |
| PDF | Compress PDF | PDF files are too large. | Image recompression and object cleanup. | Sensitive documents stay local. | Medium | P2 |
| PDF | OCR Text Extract | Scans have no selectable text. | On-device OCR and export. | Privacy-relevant documents stay local. | Medium | P2 |
| PDF | Redaction Assist | Sensitive PDF regions need removal. | Local pattern detection and redaction overlay. | Strong privacy story. | Medium | P2 |
| PDF | Sign Prep | Signature areas need setup. | Mark signature and initial fields. | Documents remain local. | Medium | P2 |
| OCR | Image OCR | Text needs extraction from images. | OCR for screenshots and scans. | Private screenshots stay local. | Medium | P2 |
| OCR | Receipt OCR | Receipts and slips need capture. | Extract text fields and totals. | Financial documents stay local. | Medium | P2 |
| OCR | OCR Cleanup | OCR text has errors. | Cleanup with confidence view. | Sensitive content stays local. | Medium | P2 |
| OCR | Multilingual OCR | Documents use multiple languages. | Language switch for OCR models. | Important for EU usage. | Medium | P2 |
| Markdown | HTML to MD | Web or HTML content needs Markdown conversion. | Sanitize and convert to Markdown. | Local knowledge work. | Medium | P2 |
| Markdown | Link Checker | Local docs may contain broken links. | Validate local and document links. | Supports offline docs. | Medium | P2 |
| Markdown | Diff Markdown | Document versions need comparison. | Semantic Markdown diff. | Texts stay local. | Medium | P2 |
| Files | Duplicate Finder | Duplicates waste storage. | Hash-based duplicate scanning. | Only local scanning makes sense. | Medium | P2 |
| Files | Folder Manifest | Folders need inventory. | File list with sizes and hashes. | Ideal local manifest. | Medium | P2 |
| Search | Local Text Search | Many text files need searching. | Indexed local search. | Private and fast. | Medium | P2 |
| Search | Grep Lite | Pattern search needs a simple UI. | Regex/local text search. | Developer and operations workflow. | Medium | P2 |
| Search | Duplicate Screenshot Finder | Similar screenshots accumulate. | Similarity clustering. | Strong local utility. | Medium | P2 |
| Audio | Trim Audio | Clips need shortening. | Waveform trim and export. | Private recordings stay local. | Medium | P2 |
| Audio | Convert Audio | MP3, WAV, and M4A formats need switching. | Format conversion. | Common and sensitive. | Medium | P2 |
| Audio | Normalize Loudness | Audio loudness is inconsistent. | LUFS-based normalization. | No upload needed. | Medium | P2 |
| Audio | Audio Metadata Strip | Audio tags or cover art need removal. | Strip ID3 and related tags. | Privacy relevant. | Medium | P2 |
| Speech | Speech to Text | Audio needs transcription. | On-device speech-to-text. | Very privacy-relevant. | Medium | P2 |
| Speech | Subtitle Generator | Audio or video needs subtitles. | Speech-to-text with timestamps. | Local media work. | Medium | P2 |
| Speech | TTS Preview | Text needs listening preview. | On-device speech synthesis. | Accessibility and editing utility. | High | P2 |
| Video | Trim Video | Small video edits are common. | Browser-side trim without reupload. | Private clips stay local. | Medium | P2 |
| Video | Extract Frames | Video frames are needed as images. | Export selected frames. | Useful for docs and design. | Medium | P2 |
| Vision | UI Crop Suggest | UI screenshots need clean bounds. | Detect window or content bounds. | Useful for designers and docs. | Medium | P2 |
| Terminal | Command Receipt | Local command execution needs proof. | Hash metadata and receipt draft. | Natural bridge to proof flows. | Medium | P2 |
| Git | Diff to Markdown | Diffs need review or documentation format. | Paste diff and export summary. | Private browser workflow. | Medium | P2 |
| Git | Commit Message Assistant | Commits need better structure. | Local diff summary to message draft. | Code stays local. | Medium | P2 |
| Docker | Dockerfile Lint Lite | Dockerfiles need basic checks. | Static checks and hints. | Local and fast. | Medium | P2 |
| Kubernetes | YAML Manifests Merge | Kubernetes YAML is hard to combine. | Merge, validate, and split manifests. | Infrastructure files stay local. | Medium | P2 |
| Security | PII Detector | Personal data needs detection. | Local regex and heuristic scan. | Fits privacy promise. | Medium | P2 |
| Security | Signed Artifact Check | Signatures need validation. | Checksum and signature validation. | Local trust workflow. | Medium | P2 |
| Databases | SQLite Viewer | Local SQLite files are hard to inspect. | View tables, filter, and export. | Ideal browser utility. | Medium | P2 |
| Databases | CSV to SQLite | CSV needs local database conversion. | Create table and import CSV. | Private data preparation. | Medium | P2 |
| Benchmarking | Model-free Processing Bench | Device performance needs understanding. | Benchmark canvas, workers, and WASM. | Local optimization. | Medium | P2 |
| LLM | Prompt to Tool Route | Users need the right tool faster. | Natural language to tool suggestion. | Helpful AI without product takeover. | Medium | P2 |
| Evaluation | Tool Output QA | Transforms need quality checks. | Automatic postconditions and validation. | Important for trust and agents. | Medium | P2 |
| Agents | Agent Receipt Request | Agents need proof of execution. | Receipt endpoint and UI flow. | Direct differentiation. | Medium | P2 |
| Agents | Agent Safe Handoff | Agents should use tools without retaining files. | Capability URL and local open flow. | Matches the core thesis. | Medium | P2 |
| Agents | Runbook Executor | Utility steps need guided repetition. | Step-by-step local instructions. | Human-agent bridge. | Medium | P2 |
| MCP | MCP Tool Manifest | Agents need tool discovery. | Expose schemas and manifests. | Standards layer instead of proprietary lock-in. | Medium | P2 |
| MCP | MCP Local File Tools Server | Runlocal should be an MCP provider. | Tool registry and invocation contract. | Makes tools agent-native. | Medium | P2 |
| MCP | MCP Receipt Verify Tool | Agents need receipt verification. | Verification as MCP tool. | Strong proof case. | Medium | P2 |

## P3 Deferred Ideas

| Category | Tool | Problem | Solution and Benefit | Why Local | Feasibility | Priority |
|---|---|---|---|---|---|---|
| OCR | Handwriting Assist | Handwriting is hard to read. | Experimental handwriting OCR. | Local notes remain private. | Low | P3 |
| Search | Semantic Search | Knowledge needs local semantic search. | Embeddings and local index. | Sensitive knowledge stays local. | Medium | P3 |
| Search | Image Similarity | Similar images need grouping. | Perceptual hash or embeddings. | Photos stay local. | Medium | P3 |
| Audio | Voice Extract | Speech needs isolation from audio. | Vocal or speech enhancement. | Meetings stay local. | Low | P3 |
| Video | Convert Video | Video formats are incompatible. | MP4/WebM presets. | Common, but heavy in-browser. | Low | P3 |
| Video | Compress Video | Video files are too large. | Resolution and bitrate presets. | Private videos stay local. | Low | P3 |
| Video | Blur Faces Assist | Sensitive faces need protection. | Local face detection and blur. | Strong privacy story. | Low | P3 |
| Vision | Auto Alt Text | Images need descriptions. | Local vision summary. | Accessibility workflow stays local. | Medium | P3 |
| Vision | Screenshot Classifier | Screenshots need organization. | Local tags and project grouping. | Sensitive work surfaces stay local. | Medium | P3 |
| Databases | JSON to SQLite | JSON needs quick local querying. | Create local database from JSON. | Developer/data work stays local. | Medium | P3 |
| Automation | Watch Folder PWA | Repeat tasks need watching. | Installable watcher-like flow. | Offline installed experience. | Low | P3 |
| LLM | Local Summarize File | Text files need summaries. | On-device summarization. | Sensitive contents stay local. | Medium | P3 |
| Embeddings | Local Semantic Tags | Assets need better discovery. | Embedding-based tagging. | Knowledge stays local. | Medium | P3 |
| RAG | Local Doc Pack Search | Small doc packs need search. | Local index over selected docs. | Private docs stay local. | Medium | P3 |

## Deferred Product Directions

These are explicitly not near-term implementation priorities:

- General AI chat
- Local model download and management
- Full workflow canvas before core tools are strong
- Community marketplace
- Enterprise policy suites
- Video conversion at scale
- On-device semantic search as a primary product
- Advanced OCR and vision tools as the front door

