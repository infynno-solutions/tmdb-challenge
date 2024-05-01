import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url).then(async (res) => await res.json());
      setData(result);
    };
    fetchData();
  }, []);

  return { data };
};
