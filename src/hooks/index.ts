export const getData = async (endPoind: string) => {
      const res = await fetch(endPoind, {
            headers: {
                  "Content-Type": "application/json"
            },
      });
      const data = await res?.json()
      return data;
} 