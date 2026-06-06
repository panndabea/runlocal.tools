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
    payment: {
                protocol: "x402",
                network: "algorand-testnet",
                asset: "USDC",
                amount: "0.001",
                status: "pending_testnet_integration"
            }
  };

  receipt.verify_url =
    `https://verify.runlocal.tools/?id=${receipt.receipt_id}`;

  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(JSON.stringify(receipt))
  );

    receipt.receipt_hash =
    "sha256:" +
    [...new Uint8Array(hashBuffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

  await context.env.RECEIPTS.put(
    receipt.receipt_id,
    JSON.stringify(receipt)
  );

  return Response.json(receipt, { status: 201 });
}