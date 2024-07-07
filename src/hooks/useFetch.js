import { useEffect, useState } from "react";
import supabase from "../backend/supabase";

export const useFetch = (fetch, initialValue, ids = "*") => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getfetchData() {
      setIsFetching(true);
      try {
        const data = await supabase.from(fetch).select(ids);
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

export const usePost = (initialValues) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValues);

  const postData = async (fetch, payload) => {
    setIsFetching(true);
    try {
      const { data, error } = await supabase
        .from(fetch)
        .insert(payload)
        .select();
      if (error) throw error;
      setData(data);
    } catch (err) {
      setError({ message: err.message || "Failed to post data." });
    } finally {
      setIsFetching(false);
    }
  };

  return { isFetching, error, data, postData };
};
