

export const getFetchData = async (endPoint: string) => {
     const res = await fetch(endPoint, {
       headers: {
         "Content-Type": "application/json",
       },
     });
     const data = await res?.json();
     return data;
   };