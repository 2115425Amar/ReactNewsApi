import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
        const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&token=${apiKey}`;
        // if(category){
        //   url+= `&topic=${category}`;
        // }
        const categoryParam = category ? `&topic=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";

        const url = apiUrl + categoryParam + searchParam;
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);   //articles is the array
        setLoading(false);
      }
       catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchNewsData();            //call the function
  }, [category, searchTerm]);   //dependency array

  return { newsData, loading, error };
};

export default useNewsData;
