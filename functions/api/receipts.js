export async function onRequestPost(context) {
  const body = await context.request.json();

  const receipt = {
    receipt_id: "rct_" + crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    ...body
  };

  await context.env.RECEIPTS.put(
    receipt.receipt_id,
    JSON.stringify(receipt)
  );

  return Response.json(receipt);
}