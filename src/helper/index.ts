const getData = async (endpoint: string)=> {
    const response = await fetch(endpoint);
    return await response.json();
    
}

export {getData}