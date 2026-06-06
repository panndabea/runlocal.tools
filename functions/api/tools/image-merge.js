export async function onRequestGet() {
  return Response.json({
    tool: "image-merge",
    version: "1.0.0",
    run_url: "https://runlocal.tools/images/merge/",
    runs_locally: true,
    free_to_use: true,
    optional_receipts: true
  });
}