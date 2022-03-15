import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SnpPage from './pages/SnpPage/SnpPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Homepage from './pages/Homepage/Homepage';
import './App.css';
import { initiateSearch } from './redux/stocks/search_stocks';
import { fetchSnpData } from './redux/stocks/snp';
import { fetchData } from './redux/stocks/stocks';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(initiateSearch(data));
  }, [data]);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchSnpData());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/snp" element={<SnpPage />} />
        <Route path="/details/:symbol" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
