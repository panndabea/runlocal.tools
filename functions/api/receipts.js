export async function onRequestPost(context) {
  const body = await context.request.json();

  const receipt = {
    receipt_id: "rct_" + crypto.randomUUID(),
    tool: body.tool || "unknown",
    tool_url: body.tool_url || "https://runlocal.tools/images/merge/",
    version: body.version || "unknown",
    runs_locally: true,
    free_to_use: true,
    timestamp: new Date().toISOString(),
    input_hashes: body.input_hashes || [],
    output_hash: body.output_hash || null,
    proof_type: "verifiable_execution_receipt",
    payment_status: "demo_not_required_yet"
  };

  receipt.verify_url =
    `https://verify.runlocal.tools/?id=${receipt.receipt_id}`;

  await context.env.RECEIPTS.put(
    receipt.receipt_id,
    JSON.stringify(receipt)
  );

  return Response.json(receipt, { status: 201 });
}