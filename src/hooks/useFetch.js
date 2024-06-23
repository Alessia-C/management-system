import { useEffect, useState } from "react";
import supabase from "../backend/supabase";

const useFetch = (fetch, initialValue) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getfetchData() {
      setIsFetching(true);
      try {
        const data = await supabase.from(fetch).select("*");
        setData(data.data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      } finally {
        setIsFetching(false);
      }
    }

    getfetchData();
  }, [fetch]);

  return { isFetching, error, data };
};

export default useFetch;
