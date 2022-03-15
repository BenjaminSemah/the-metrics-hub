import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCompany } from '../../redux/company/company';
import './StockItem.css';

const StockItem = ({ name, price, symbol }) => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.company);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchCompany(symbol));
  };

  useEffect(() => {
    if (Object.keys(data).length > 0 && data.symbol === symbol) {
      navigate(`/details/${symbol}`);
    }
  }, [data]);

  return (
    <button
      className="stocks--item"
      type="button"
      onClick={onClick}
    >
      <div className="stocks--symbol">
        <p>{symbol}</p>
      </div>
      <div className="stocks--info">
        <p className="stocks--name">{name}</p>
        <p className="stocks--price">{price}</p>
      </div>
    </button>
  );
};

StockItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  symbol: propTypes.string.isRequired,
};

export default StockItem;
