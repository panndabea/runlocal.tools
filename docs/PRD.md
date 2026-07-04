# Product Requirements

Status: canonical PRD for the local-first toolbox foundation  
Last updated: 2026-07-03  
Related docs: `docs/Product-Strategy.md`, `docs/Roadmap.md`

## Product Scope

This PRD covers the foundation for runlocal.tools as a local-first browser toolbox.

The first product milestone is not a platform, marketplace, AI workspace, or automation canvas. It is a consistent set of high-quality local tools built on shared interaction and processing primitives.

## Problem

Everyday file tasks often require users to upload private files to opaque services for operations that modern browsers can perform locally.

Users need simple tools for image, data, PDF, and file workflows that:

- Work without accounts
- Avoid server-side file processing
- Explain what happens to files
- Produce useful local outputs quickly
- Can later be composed into repeatable workflows

For automated or compliance-sensitive contexts, some users also need receipts that prove tool metadata and hashes without exposing private files.

## Users

Privacy-sensitive knowledge worker:

Handles screenshots, CSVs, PDFs, and images that should not be uploaded to random services.

Developer, designer, or operator:

Needs fast utilities for formatting, converting, comparing, hashing, and preparing files.

Public-interest, NGO, education, or internal-tool user:

Needs accessible tools that can be inspected, mirrored, or self-hosted.

Agent builder or compliance engineer:

Needs machine-readable tool metadata and optional receipts, but not at the cost of exposing private input files.

## Goals

- Make local file work faster than upload-first alternatives.
- Make privacy obvious at the moment of use.
- Make live tools visually and behaviorally consistent.
- Reduce implementation cost for new tools through shared primitives.
- Keep optional verification available without making it the main product.

## Non-Goals

- General AI chat
- Local model management
- IDE or coding-agent workflows
- No-code app generation
- Full workflow automation canvas
- Cloud storage or hosted file processing
- Crypto-first product positioning

## Current Live Scope

Live human-facing tools:

- `/images/merge/`
- `/images/strip-metadata/`
- `/data/csv-to-json/`
- `/verify.html`

Live or planned machine-facing surfaces:

- `/api/tools`
- `/api/tools/image-merge`
- `/api/tools/strip-metadata`
- `/api/tools/csv-to-json`
- `/api/tools/receipt-verification`
- `POST /api/receipts`
- `GET /api/receipts/:id`

## Functional Requirements

Every tool route must:

- Use a stable, descriptive URL.
- State local execution above the fold.
- Accept the natural input mode for the task: file picker, drag/drop, paste, or text input.
- Show supported formats before processing.
- Validate unsupported files or malformed input with clear errors.
- Process core file transformations in the browser.
- Provide a useful result preview where practical.
- Provide a copy or download path for the output.
- Avoid hidden server-side file processing.
- Avoid unnecessary accounts, sign-in, or tracking.

Every processing flow must support:

- Empty state
- Ready state
- Processing state
- Success state
- Error state
- Reset or clear action

Every export flow must:

- Use predictable filenames.
- Release object URLs when no longer needed.
- Preserve the user's control over when a file is downloaded.
- Explain any destructive or lossy change before export.

## Shared Tool Shell Requirements

The shared shell should eventually provide:

- Header with route, product link, and local-only cue
- Input area for drag/drop, file picker, paste, or text
- Supported-format display
- Status and progress model
- Error display
- Preview region
- Result and export region
- Clear/reset action
- Common spacing, type, color, and button styles
- Accessibility defaults

New tools should not build ad-hoc file input, preview, status, or export logic once the shared shell exists.

## Privacy Requirements

- Core tools must not upload user files for transformation.
- Pages must avoid wording that implies files are uploaded when they are only selected locally.
- If any external dependency or API is used, the page must make its role clear.
- Receipts must not store private file contents.
- Receipt metadata may reference hashes, tool IDs, tool versions, timestamps, and output metadata.

## Accessibility Requirements

- All interactive controls must be keyboard reachable.
- Drag/drop areas must have accessible labels and keyboard alternatives.
- Status messages must be exposed to assistive technologies where appropriate.
- Text and controls must meet WCAG AA contrast.
- Touch targets should be large enough for mobile use.
- Motion must respect reduced-motion preferences.

## UX Requirements

- The first screen of a tool should be the actual usable tool, not marketing.
- Copy should be concrete and calm.
- Privacy cues should appear in the tool header or input area.
- Tool UI should feel consistent across image, data, PDF, and file utilities.
- Receipts should be visually secondary to the primary local workflow.

## Initial Acceptance Criteria

A live tool is acceptable when:

- The route loads without build steps.
- The user can provide valid input.
- The tool processes that input locally.
- The user can export or copy the result.
- Unsupported input produces a clear error.
- The page states local execution visibly.
- The tool works on mobile and desktop layouts.
- Keyboard operation covers the main flow.

## Definition of Done for a Tool Route

- Stable route exists.
- Local-only notice appears above the fold.
- Input method matches the task.
- Empty, ready, processing, success, and error states exist.
- Result preview exists where meaningful.
- Export or copy action exists.
- Keyboard support is present.
- Accessible labels are present.
- Basic responsive layout is verified.
- Manifest or tool metadata entry is updated when available.
- Product docs are updated if the tool changes scope.

## Measurement Events

Use privacy-preserving events only.

Useful events:

- Tool opened
- Input accepted
- Processing started
- Processing succeeded
- Processing failed
- Output exported or copied
- Receipt created
- Receipt verified

Do not capture file contents, raw file names, private text input, or personally identifying file data.
