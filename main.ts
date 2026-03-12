Deno.serve({ port: 8000 }, (_req: Request): Response => {
  return new Response("Hello from Deno!", {
    headers: { "content-type": "text/plain" },
  });
});
