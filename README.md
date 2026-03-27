# runlocal.tools

Local-first browser tools for file and media processing.

## Scope

- Execute processing in the client runtime (browser APIs, Web Workers, WASM).
- Avoid server-side file processing for core tool behavior.
- Expose tools via stable URL routes (for example: `/images/resize`, `/csv/to-json`).

## Current tool domains

- Images: resize, convert, compress, crop
- Data: CSV/JSON conversion, formatting, validation, inspection
- Video: planned

## Technical principles

- Local execution by default
- No file upload requirement for core workflows
- Reusable processing primitives across tools
- Progressive enhancement and offline-capable delivery

## Contributing

Contributions for new tools, performance work, and documentation are welcome.

## License

To be defined.
