import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import StockHeader from '../../components/StockHeader/StockHeader';
import ItemList from '../../components/ItemList/ItemList';
import './DetailsPage.css';

const DetailsPage = () => {
  const {
    companyName,
    image,
    symbol,
    price,
    ...data
  } = useSelector((state) => state.company);

  delete data.description;
  delete data.beta;
  delete data.defaultImage;
  delete data.isEtf;
  delete data.isAdr;
  delete data.isFund;
  delete data.isActivelyTrading;

  const filteredData = { symbol, ...data };
  // const data = useSelector((state) => state.stocks).find((stock) => stock.symbol === symbol);

  return (
    <>
      <div className="details--page">
        <Navbar title="company details" />
        <StockHeader
          value={{
            companyName, image, symbol, price,
          }}
        />
        <div className="comp--details">
          <h2>Company Stats</h2>
          <ItemList data={filteredData} />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
