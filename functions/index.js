export function onRequest(context) {
  const host = context.request.headers.get("host");

  if (host === "verify.runlocal.tools") {
    return Response.redirect(
      "https://verify.runlocal.tools/verify.html",
      302
    );
  }

  return context.next();
}