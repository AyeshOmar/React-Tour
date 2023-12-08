import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://course-api.com/react-tours-project';

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

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
 

  return (
    <main className="App">
      <Tours tour={tour} fetchData={fetchData} />
    </main>
  );
}

export default App;
