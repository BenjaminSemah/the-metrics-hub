import propTypes from 'prop-types';
import './ItemList.css';

const ItemList = ({ data }) => (
  <>
    <ul className="details--list">
      {Object.keys(data).map((key) => (
        <li className="single--item" key={key}>
          <p className="data--key">{key}</p>
          <p className="data--data">{data[key]}</p>
        </li>
      ))}
    </ul>
  </>
);

export default ItemList;

ItemList.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
