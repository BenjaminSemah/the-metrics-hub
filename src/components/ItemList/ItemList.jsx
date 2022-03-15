import propTypes from 'prop-types';

const ItemList = ({ data }) => (
  <>
    <ul className="details--list">
      {Object.keys(data).map((key) => (
        <li className="single--item" key={key}>
          <span>{key}</span>
          <span>{data[key]}</span>
        </li>
      ))}
    </ul>
  </>
);

export default ItemList;

ItemList.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
};
