import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/slices/authSlice";

const useLoadingWithRefresh = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );
        setLoading(false);
        dispatch(setAuth(data));
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, []);

  return { loading };
};

export default useLoadingWithRefresh;
