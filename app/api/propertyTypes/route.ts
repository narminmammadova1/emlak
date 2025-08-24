export async function GET(){

    try{

        const res=await fetch("https://e-baza.az/api/LPropertyType/property-types")
        const data=await res.json()
        return new Response(JSON.stringify(data),{
            status:200,
            headers:{"Content-Type":"application/json"}
        })
    }
    catch(err){
         return new Response(JSON.stringify({ error: "Fetch failed" }), {
      status: 500,
    });
    }
}