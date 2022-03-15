import propTypes from 'prop-types'
import './StockHeader.css'

const StockHeader = ({ value }) => {
  return (
    <>
      <div className="stocks--header">
        <div className="stocks--image">
          <img src={value.image} alt={value.companyName} />
        </div>
        <div className="stocks--information">
          <p className="snp--logo">{value.companyName}</p>
          <p className="stocks--prices">{value.price}</p>
        </div>
      </div>
    </>
  );
};

StockHeader.propTypes = {
  value: propTypes.instanceOf(Object).isRequired,
};

export default StockHeader;

