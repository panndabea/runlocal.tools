# Product Strategy

Status: canonical product direction  
Last updated: 2026-07-03  
Related source: `product/productstrategy.md`

## Strategic Decision

runlocal.tools is a local-first browser toolbox for private file and media work.

It should not become a local LLM hub, AI chat workspace, IDE competitor, no-code app builder, or general automation platform. AI, MCP, receipts, and payment layers can become valuable extensions, but they are not the primary product.

The product should win by making everyday file work feel faster, calmer, more private, and more trustworthy than upload-first utilities.

## Core Thesis

Share tools, not files.

Users should be able to share a stable tool URL while keeping the actual file on their own device. The recipient opens the same capability and processes their own local data in their own browser.

## Positioning

runlocal.tools is the open, local-first toolbox for browser-native file work.

Primary promise:

> Run tools locally. Keep your files with you.

Secondary promise:

> Verify when it matters.

The first promise is the product. The second promise is an optional layer for automated, compliance-sensitive, or agentic workflows.

## Mission

Make private file and media work on the web so direct and trustworthy that upload-first utilities feel unnecessary.

## Vision

Become the open, URL-addressable local tool layer of the web: useful for humans first, and later discoverable by agents through manifests, receipts, and standard tool protocols.

## North Star Metric

Weekly Completed Local Workflows.

A completed local workflow is a session where a user opens a tool, processes input locally, and exports or copies a useful result without server-side file processing.

Supporting metrics:

- Export success rate
- Median time to result per tool
- Repeat usage across two or more tools
- Percentage of sessions with no file upload
- Pipeline completion rate once composition exists
- Receipt attach rate only for verification workflows

## Product Principles

- Local execution is the default for core workflows.
- Tool URLs are stable and shareable.
- Every tool is focused, legible, and inspectable.
- Privacy should be visible in the interface, not hidden in policy text.
- Shared primitives come before tool sprawl.
- Receipts prove metadata and hashes, not possession of private files.
- AI assists the file workflow; it is not the front door.
- The project should remain self-hostable and open to reuse.

## Market Boundaries

Do not compete head-on with:

- Local model runners such as LM Studio, Ollama, or LocalAI
- AI chat and self-hosted assistant workspaces
- Coding-agent environments such as Cursor, Warp, Continue, or OpenHands
- Visual automation platforms such as n8n
- Chat-to-app builders such as Bolt or Lovable

The right lane is narrower and stronger:

Local browser tools for real file work, with optional proof and agent-readiness once the tool layer is excellent.

## Product Layers

Layer 1: Live local tools  
Focused routes such as image merge, metadata strip, CSV to JSON, JSON formatting, resizing, conversion, compression, and PDF utilities.

Layer 2: Shared tool shell  
Reusable file input, paste, drag/drop, preview, processing, status, error, export, and local-only notice patterns.

Layer 3: Composable workflows  
Outputs from one local tool can become inputs to another through explicit handoff, local history, presets, or project-like sessions.

Layer 4: Agent and verification layer  
Tool manifests, metadata APIs, MCP-style exposure, optional receipts, and payment experiments for contexts that need proof.

## Immediate Product Bets

1. Make the existing live tools feel like one product.
2. Establish shared browser-side primitives before adding many new routes.
3. Pick and publish an open-source license.
4. Add adjacent, high-frequency tools only after the shell is stable.
5. Keep receipt verification present but visually and strategically secondary.

## Near-Term Tool Focus

The next tools should reinforce the existing image and data wedge:

- Resize
- Convert
- Compress
- Crop
- JSON to CSV
- JSON formatter
- JSON validator
- PDF merge
- PDF split
- Bulk rename
- File hash
- HAR cleaner

## Brand Direction

The brand should feel calm, precise, warm, and trustworthy.

The working visual foundation is documented in [Design Foundation](Design-Foundation.md).

Avoid:

- Generic AI futurism
- Security-product fear language
- Crypto-first visual semantics
- Neon, cyberpunk, gaming, or heavy glassmorphism
- Loud dashboard theatrics

Prefer:

- Editorial clarity
- Quiet utility
- Warm light surfaces
- Strong hierarchy
- Precise tool states
- Visible privacy cues

## Non-Negotiables

- Core tools must not upload user files for processing.
- Local-only behavior must be stated above the fold on every tool route.
- Every route must have idle, ready, processing, success, and error states.
- Every route must support keyboard interaction and accessible labels.
- Every processing feature must have an export or copy path.
- New tools should use shared primitives once those primitives exist.
- Agent-facing layers must not obscure the human tool experience.
