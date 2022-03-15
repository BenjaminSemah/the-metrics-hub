import propTypes from 'prop-types'
import StockItem from '../StockItem/StockItem';

const StockList = ({ data }) => {
  return (
    <>
      <ul className="stocks--container">
        {
          data.map(({ symbol, companyName, price }) => (
            <StockItem 
              key={key}
              name={companyName}
              symbol={symbol}
              price={price}
            />
          ))
        }
      </ul>
    </>
  );
};

StockList.propTypes ={
  data: propTypes.instanceOf(Object).isRequired,
};

export default StockList;
