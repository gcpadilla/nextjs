import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
   const [datos, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
         } catch (error) {
            setError(error);
            setLoading(false);
         }
      }
      fetchData();
   }, [url]);
   return { datos, error, loading };
}
export default useFetch;