import propTypes from 'prop-types';
import StockItem from '../StockItem/StockItem';

const StockList = ({ data }) => (
  <>
    <ul className="stocks--container">
      {
        data.map(({ symbol, companyName, price }) => (
          <StockItem
            key={symbol}
            name={companyName}
            symbol={symbol}
            price={price}
          />
        ))
      }
    </ul>
  </>
);

StockList.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};

export default StockList;
