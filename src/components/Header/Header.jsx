import propTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = ({ value }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/snp');
  }

  return (
    <>
      <button type="button" className="header--btn" onclick={onClick}>
        <div>
          <h2>{value.name}</h2>
        </div>
        <div className="snp--info">
          <p className="snp--logo">{value.symbol}</p>
          <p className="snp--price">{value.price}</p>
        </div>
      </button>
    </>
  );
};

Header.propTypes = {
  value: propTypes.instanceOf(Object).isRequired,
};

export default Header;
