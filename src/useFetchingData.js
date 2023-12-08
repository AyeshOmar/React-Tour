import { useState, useEffect } from 'react';

const useFetchingData = (url) => {
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTour(data);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { tour, isLoading, fetchData }; // Include fetchData in the return object
};

export default useFetchingData;
