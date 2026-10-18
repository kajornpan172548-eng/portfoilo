// Cloudflare Pages Function: /api/projects
// Supports GET, POST, PUT, DELETE with D1 Database

export async function onRequestGet(context) {
  const { env } = context;
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 Database binding 'DB' not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { results } = await env.DB.prepare(
      "SELECT * FROM projects ORDER BY created_at DESC"
    ).all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    const id = data.id || `proj-${Date.now()}`;

    if (!env.DB) {
      return new Response(JSON.stringify({ success: true, id, mocked: true, data }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    await env.DB.prepare(
      `INSERT INTO projects (id, title_th, title_en, category, description_th, description_en, technologies, image_url, demo_url, github_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      id,
      data.title_th || data.title,
      data.title_en || data.title,
      data.category || 'fullstack',
      data.description_th || data.description,
      data.description_en || data.description,
      data.technologies || '',
      data.image_url || '',
      data.demo_url || '',
      data.github_url || ''
    ).run();

    return new Response(JSON.stringify({ success: true, id }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestDelete(context) {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing project id" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (env.DB) {
      await env.DB.prepare("DELETE FROM projects WHERE id = ?").bind(id).run();
    }

    return new Response(JSON.stringify({ success: true, id }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
