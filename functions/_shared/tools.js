export const TOOL_REGISTRY = {
  schema_version: "1.0.0",
  tools: [
    {
      id: "image-merge",
      tool: "image-merge",
      name: "Image Merge",
      category: "images",
      status: "live",
      route: "/images/merge/",
      run_url: "https://runlocal.tools/images/merge/",
      api_route: "/api/tools/image-merge",
      description:
        "Merge multiple images locally in the browser and export a combined PNG, WebP, or smallest generated file.",
      runs_locally: true,
      free_to_use: true,
      receipts_supported: true,
      optional_receipts: true,
      input_modes: ["file-picker", "drag-drop"],
      input_types: ["image/png", "image/jpeg", "image/webp", "image/heic", "image/heif"],
      output_types: ["image/png", "image/webp"],
      version: "1.0.0"
    },
    {
      id: "strip-metadata",
      tool: "strip-metadata",
      name: "Strip Image Metadata",
      category: "images",
      status: "live",
      route: "/images/strip-metadata/",
      run_url: "https://runlocal.tools/images/strip-metadata/",
      api_route: "/api/tools/strip-metadata",
      description:
        "Remove embedded image metadata locally by re-saving visible pixels without EXIF, GPS, camera, author, or software metadata.",
      runs_locally: true,
      free_to_use: true,
      receipts_supported: false,
      optional_receipts: false,
      input_modes: ["file-picker", "drag-drop"],
      input_types: ["image/png", "image/jpeg", "image/webp"],
      output_types: ["image/png", "image/jpeg", "image/webp"],
      version: "1.0.0"
    },
    {
      id: "csv-to-json",
      tool: "csv-to-json",
      name: "CSV to JSON",
      category: "data",
      status: "live",
      route: "/data/csv-to-json/",
      run_url: "https://runlocal.tools/data/csv-to-json/",
      api_route: "/api/tools/csv-to-json",
      description: "Convert CSV text or local CSV files into JSON in the browser.",
      runs_locally: true,
      free_to_use: true,
      receipts_supported: false,
      optional_receipts: false,
      input_modes: ["file-picker", "paste", "text-input"],
      input_types: ["text/csv", "text/plain"],
      output_types: ["application/json"],
      version: "1.0.0"
    },
    {
      id: "receipt-verification",
      tool: "receipt-verification",
      name: "Receipt Verification",
      category: "verification",
      status: "live",
      route: "/verify.html",
      run_url: "https://runlocal.tools/verify.html",
      api_route: "/api/tools/receipt-verification",
      description:
        "Verify public execution receipt metadata and hashes without exposing private file contents.",
      runs_locally: false,
      free_to_use: true,
      receipts_supported: false,
      optional_receipts: false,
      input_modes: ["text-input", "url-query"],
      input_types: ["text/plain"],
      output_types: ["application/json", "text/html"],
      version: "1.0.0"
    }
  ]
};

export function getToolById(id) {
  return TOOL_REGISTRY.tools.find((tool) => tool.id === id);
}

export function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body, null, 2), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...init.headers
    }
  });
}

export function toolResponse(id) {
  const tool = getToolById(id);

  if (!tool) {
    return jsonResponse({ error: "Tool not found" }, { status: 404 });
  }

  return jsonResponse(tool);
}
