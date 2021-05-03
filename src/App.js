import { useEffect } from 'react';
import stayApi from './api/stayApi';
import MainPage from './features/Stay/pages/MainPage';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await stayApi.getAll();

      console.log(res);
    };

    fetchData();
  }, []);
  return (
    <div className='windbnb'>
      <MainPage />
    </div>
  );
}

export default App;
