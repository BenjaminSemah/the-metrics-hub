import propTypes from 'prop-types';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';

const NavItem = ({ onClick }) => (
  <>
    <div className="navigation">
      <IoIosArrowBack className="nav--icon" onClick={onClick} />
      <h2>The Metrics Hub</h2>
      <IoIosSettings className="nav--icon" />
    </div>
  </>
);

NavItem.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default NavItem;
