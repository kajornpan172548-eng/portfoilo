// Cloudflare Pages Function: /api/upload
// Handles image & PDF uploads to Cloudflare R2 Bucket

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return new Response(JSON.stringify({ error: "Expected multipart/form-data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;

    if (env.BUCKET) {
      await env.BUCKET.put(filename, file.stream(), {
        httpMetadata: {
          contentType: file.type
        }
      });
      return new Response(JSON.stringify({
        success: true,
        filename,
        url: `/uploads/${filename}`
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // Mock fallback when R2 is not configured
    return new Response(JSON.stringify({
      success: true,
      filename,
      url: `data:${file.type};base64,...`,
      mocked: true,
      message: "Uploaded locally / simulated (R2 binding available in Cloudflare)"
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
