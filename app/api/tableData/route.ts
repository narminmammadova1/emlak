// export async function GET() {
//   try {
//     const res = await fetch(`https://e-baza.az/api/lproperty/filter?page=1&pagesize=200`);
//     const data = await res.json();
//     console.log("API cavabı:", data);
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" }
//     });
//   } catch (err) {
//     return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
//   }
// }



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pagesize") || "200";

  try {
    const res = await fetch(`https://e-baza.az/api/lproperty/filter?page=${page}&pagesize=${pageSize}`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Fetch failed" }), { status: 500 });
  }
}
