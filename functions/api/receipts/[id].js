export async function onRequestGet(context) {
  const id = context.params.id;

  const receipt = await context.env.RECEIPTS.get(id);

  if (!receipt) {
    return new Response("Receipt not found", {
      status: 404
    });
  }

  return new Response(receipt, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}