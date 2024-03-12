import { useEffect, useState } from "react";
export function useFetch(url): object {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
      } catch (err) {
        console.log("Error");
      }
    };

    fetchData();
  }, [url]);
  return { data };
}
