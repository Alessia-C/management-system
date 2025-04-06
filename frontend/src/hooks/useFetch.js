import { useEffect, useState } from "react";
// import supabase from "../backend/supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLoading, startLoading } from "../store/uiSlice";
import { setInitialValues } from "../store/formSlice";

export const useFetch = (endpoint, initialValue) => {
  const [isFetching] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getfetchData() {
      dispatch(startLoading());

      try {
        const response = await fetch(`http://localhost:4000/${endpoint}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
        setError({ message: error.message || "Failed to fetch data." });
      } finally {
        dispatch(clearLoading());
      }
    }

    getfetchData();
  }, [dispatch, endpoint]);

  return { isFetching, error, data };
};

export const useGetUser = (endpoint, initialValue, id) => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function getfetchData() {
      try {
        const response = await fetch(`http://localhost:4000/${endpoint}/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }

        const data = await response.json();
        setData(data);
        dispatch(setInitialValues(data));
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      } finally {
        setIsFetching(false);
      }
    }

    getfetchData();
  }, [dispatch, endpoint, id]);

  return { isFetching, error, data };
};

export const usePost = (initialValues) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValues);

  const postData = async (endpoint, payload) => {
    setIsFetching(true);
    try {
      const response = await fetch(`http://localhost:4000/new${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const newData = await response.json();
    setData(newData);
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
  const navigate = useNavigate();

  const deleteById = async (endpoint, id) => {
    try {
      setIsFetching(true);
      const response = await fetch(`http://localhost:4000/${endpoint}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Errore nella cancellazione");
      }
      setIsSuccess(true);
      setError(null);
      navigate(-1);
      
    } catch (err) {
      console.error("Error during deletion:", err);
      setError(err);
      setIsSuccess(false);
    } finally {
      setIsFetching(false);
    }
  };

  return { isFetching, deleteById, success, error };
};
