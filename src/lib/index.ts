export const fetchData = async (endpoint:string)=>{
    const res = await fetch(endpoint,{
      method:'GET',
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    const data = await res.json()
    return data;
  }