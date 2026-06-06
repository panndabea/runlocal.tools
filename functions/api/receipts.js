export async function onRequestPost(context) {
  const body = await context.request.json();

  const receipt = {
    receipt_id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    ...body
  };

  return Response.json(receipt);
}