export function onRequest(context) {
  const url = new URL(context.request.url);
  const host = context.request.headers.get("host");

  if (host === "verify.runlocal.tools" && url.pathname === "/") {
    return Response.redirect(
      `https://verify.runlocal.tools/verify.html${url.search}`,
      302
    );
  }

  return context.next();
}