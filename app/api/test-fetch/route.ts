export async function GET() {
  try {
    const res = await fetch(`https://e-baza.az/api/lproperty/filter?page=1&pagesize=200`);
    const data = await res.json();
    console.log("API cavabı:", data);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
  }
}
