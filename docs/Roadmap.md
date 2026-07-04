# Roadmap

Status: canonical roadmap  
Last updated: 2026-07-04
Related docs: `docs/Product-Strategy.md`, `docs/PRD.md`, `docs/Priority-Implementation-Tools.md`

## Roadmap Principle

Polish the foundation before expanding the catalog.

runlocal.tools should first make the existing tools feel consistent, reliable, and obviously local. New tool volume matters only after the shared shell and processing primitives reduce duplication.

## Now: Foundation

Target: current phase

Primary outcomes:

- The live tools feel like one product.
- The local-first promise is visible and consistent.
- The repo has a clear license and canonical docs.
- Future tools have a shared implementation path.

Work:

- Choose and add an open-source license.
- Align wording across live tools: use "choose", "open", "drop", or "select" instead of "upload" for local files.
- Normalize tool headers, privacy cues, status bars, buttons, and export patterns.
- Bring `/images/merge/` visually closer to `/images/strip-metadata/` and `/data/csv-to-json/`.
- Define a small shared design/token layer before adding more visual variants.
- Define tool metadata shape for every live tool.
- Expand the data family with JSON to CSV and JSON formatter/validator routes.
- Add basic happy-path and failure-path checks for live tools.
- Document local-only behavior and receipt boundaries.

Exit criteria:

- Existing live routes share the same product shell.
- Every live tool has visible local-only messaging.
- Every live tool has clear empty, ready, processing, success, and error states.
- README links to the canonical strategy docs.
- License is no longer "Not specified yet."

## Next: Tool Shell and Adjacent Tools

Target: after foundation work

Primary outcomes:

- Adding a new local tool becomes straightforward.
- Image and data workflows become dense enough for repeat use.
- The product moves from "nice demo" to "daily utility shelf."

Work:

- Extract reusable input, status, preview, and export primitives.
- Add or formalize tool manifests.
- Add high-frequency adjacent tools:
  - Image resize
  - Image convert
  - Image compress
  - Image crop
  - JSON inspector
  - File hash
  - Bulk rename
  - HAR cleaner
- Add docs for building a new tool route.
- Add local metrics events without file-content capture.

Exit criteria:

- New tools reuse shared primitives.
- At least six core tools are live and consistent.
- Image and data categories each have more than one complete workflow.
- Tool manifests can power the homepage or a tool index.

## Later: Composition

Target: after the local tool catalog has consistent quality

Primary outcomes:

- Outputs from one tool can intentionally move into another tool.
- Users can repeat local workflows without starting from scratch.
- The "share tools, not files" thesis becomes practical beyond single tools.

Work:

- Add explicit tool-to-tool handoff patterns.
- Add local history or recent workflows.
- Add presets for repeatable transformations.
- Explore browser storage for local project-like sessions.
- Add PDF utilities:
  - PDF merge
  - PDF split
  - Extract pages
  - PDF metadata inspect
- Add safe-share pipelines such as strip metadata -> compress -> hash.

Exit criteria:

- A user can complete at least one multi-step local workflow.
- Pipeline handoff does not require server-side file storage.
- Presets or recent local workflows make repeat use faster.

## Future: Agent and Verification Layer

Target: only after the human tool layer is strong

Primary outcomes:

- Agents can discover what tools exist.
- Verification workflows can prove metadata and hashes.
- Monetization experiments do not distort the human product.

Work:

- Expand tool metadata APIs.
- Add MCP-style tool exposure.
- Improve receipt creation and verification UX.
- Define receipt schemas and boundaries.
- Explore x402 or payment-gated proof flows only where there is clear demand.
- Add self-hosting and enterprise verification notes if users ask for them.

Exit criteria:

- Agent-facing surfaces are documented and stable.
- Receipts do not store private file contents.
- Verification is useful without becoming the primary homepage story.

## Deferred Ideas

Do not prioritize until the foundation is strong:

- General AI chat
- Local model download and management
- Full workflow canvas
- Community marketplace
- Enterprise policy suites
- Video conversion at scale
- On-device semantic search
- Advanced OCR and vision tools
