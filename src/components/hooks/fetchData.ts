export const fetchData = async(endpoint : string) => {
    const response = await fetch(endpoint, {
        headers:{
            'Content-Type': 'application/json',
        }
    });
    const data = await response?.json();
    return data;
}