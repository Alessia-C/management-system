import { useEffect, useState } from "react";
import supabase from "../backend/supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLoading, startLoading } from "../store/uiSlice";

export const useFetch = (fetch, initialValue) => {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch()
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getfetchData() {
      dispatch(startLoading())
      try {
        const data = await supabase.from(fetch).select("*");
        setData(data.data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      } finally {
       dispatch(clearLoading())
      }
    }

    getfetchData();
  }, [fetch]);

  return { isFetching, error, data };
};

export const useGetUser = (fetch, initialValue, id) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getfetchData() {
      setIsFetching(true);
      try {
        const data = await supabase
          .from(fetch)
          .select("*")
          .eq("id", id)
          .single();
        setData(data.data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      } finally {
        setIsFetching(false);
      }
    }

    getfetchData();
  }, [fetch, id]);

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

export const useDeleteDataById = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [success, setIsSuccess] = useState(false);
  const navigate = useNavigate()

  const deleteById = async (fetch, id) => {
    try {
      setIsFetching(true);
      const { error } = await supabase
        .from(fetch) // Replace 'users' with the name of your user table if different
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting user from users table:', error);
        setError(error);
        setIsSuccess(false);
        return;
      }

      setIsSuccess(true);
      setError(null);
      navigate(-1)
    } catch (err) {
      console.error('Error during deletion:', err);
      setError(err);
      setIsSuccess(false);
    } finally {
      setIsFetching(false);
    }
  };

  return { isFetching, deleteById, success, error };
};
