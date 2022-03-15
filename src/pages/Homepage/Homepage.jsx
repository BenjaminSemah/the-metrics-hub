import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import StockList from '../../components/StockList/StockList';
import './Homepage.css';

const Homepage = () => {
  const snp = useSelector((state) => state.snp);
  const searchData = useSelector((state) => state.searchStocks);

  return (
    <>
      <div className="page">
        <Navbar title="companies" />
        <Search />
        <Header value={snp} />
        <div className="company--stocks">
          <h2>Stats By Company</h2>
          <StockList data={searchData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
