export async function onRequest(context) {
  const host = context.request.headers.get("host");
  const path = new URL(context.request.url).pathname;

  if (host === "verify.runlocal.tools" && path.startsWith("/rct_")) {
    return context.env.ASSETS.fetch(
      new Request("https://runlocal.tools/verify.html")
    );
  }

  return context.next();
}