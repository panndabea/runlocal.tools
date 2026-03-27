# runlocal.tools

**Local-first browser tools for file and media processing.**

runlocal.tools is an open toolbox for everyday file tasks — designed to run entirely in the browser.

Files are processed locally on the user's device.
There is no upload step and no server-side processing.

---

## ✨ Scope

* Execute processing in the client runtime (Browser APIs, Web Workers, WASM)
* Expose tools via stable, shareable URL routes
  (e.g. `/images/resize`, `/csv/to-json`)
* Provide reusable primitives for local file processing

---

## 🧠 Core idea

Instead of sending files to remote services, users run tools locally.

Each tool is directly addressable:

```
/images/resize  
/images/convert  
/csv/to-json  
/json/to-csv
```

Open the tool, drop a file, and process it locally.

---

## 🔗 Share tools, not files

Tools are shared via URLs instead of transferring data between services.

A user can send a link to a tool, and the recipient runs it locally in their own browser.

No accounts.
No uploads.
No dependency on external processing.

---

## 🧩 Composability (direction)

Tools are designed as small, focused units.

Future work aims to make tools composable, allowing outputs from one tool to be used as inputs for another.

Inspired by Unix pipelines — adapted to browser-native workflows.

---

## 🧰 Current tool domains

### Images

* Resize
* Convert
* Compress
* Crop

### Data

* CSV ↔ JSON
* Formatting
* Validation
* Inspection

### Video *(planned)*

* Trim
* Convert
* Compress

---

## ⚙️ Technical principles

* Local execution by default
* No file uploads — processing happens entirely in the browser
* Reusable processing primitives across tools
* Browser-native APIs (Workers, WASM, Streams)
* Progressive enhancement
* Offline-capable delivery (PWA-ready)

---

## 🌍 Why this matters

Everyday file tasks often require uploading data to external services.

For many use cases, this is unnecessary.

Modern browsers provide sufficient capabilities to process files locally,
reducing reliance on centralized infrastructure.

runlocal.tools follows a simple principle:

Users should stay in control of their data.

---

## 🔓 Open source

This project is intended to be:

* fully inspectable
* reusable and extensible
* self-hostable

runlocal.tools is not a closed service, but a set of tools and building blocks.

---

## 🏛️ Digital commons

runlocal.tools is designed as public digital infrastructure.

The goal is to provide simple, reliable tools that:

* are accessible without friction
* do not depend on opaque services
* can be reused and extended by others

---

## 🛣️ Roadmap (high-level)

* Expand tool coverage (images, data, video)
* Define a shared local processing layer
* Improve performance and usability
* Enable composable workflows between tools
* Explore optional local AI-assisted processing

---

## 🤝 Contributing

Open an issue for proposals.

Pull requests are welcome for:

* new tools
* performance improvements
* shared processing components
* documentation

---

## 📄 License

Not specified yet.

(Recommended: MIT or Apache 2.0)
