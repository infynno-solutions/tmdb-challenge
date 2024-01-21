import { useState, useEffect } from "react";
import { get } from "../utils/API/apiService";

interface ApiParams {
  api_key: string;
  language: string;
  page?: string;
  region?: string;
}

interface FetchDataResult {
  results: any[];
  genres?: any[];
}
const useFetchData = (endpoint: string, params: ApiParams) => {
  const [data, setData] = useState<FetchDataResult[]>([]);

  const fetchData = async () => {
    try {
      const result: any = await get(
        `${process.env.NEXT_PUBLIC_URL}/${endpoint}`,
        params
      );
      if (!result?.genres) {
        setData(result?.results);
      } else {
        setData(result?.genres);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetchData;
