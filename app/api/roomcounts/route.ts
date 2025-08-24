export async function GET(){

    try{
const res=await fetch('https://e-baza.az/api/LRoomCount/all')
const data=await res.json()
return new Response(JSON.stringify(data),{
    status:200,
    headers:{'Content-Type':'application/json'}
})
}
catch(error){
     return new Response(JSON.stringify({ error: "Fetch failed" }), {
      status: 500,
    });
  }
    
}