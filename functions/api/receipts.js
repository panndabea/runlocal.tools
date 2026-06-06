export async function onRequestPost(context) {
  const body = await context.request.json();

  const receipt = {
    receipt_id: "rct_" + crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    ...body
  };

  receipt.verify_url =
    `https://verify.runlocal.tools/?id=${receipt.receipt_id}`;

  await context.env.RECEIPTS.put(
    receipt.receipt_id,
    JSON.stringify(receipt)
  );

  return Response.json(receipt);
}