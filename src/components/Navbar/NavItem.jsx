import propTypes from 'prop-types';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io'
import { AiFillAudio } from './react-icons/ai';

const NavItem = ({ onClick, title }) => {
  return (
    <>
      <div>
        <IoIosArrowBack className="nav--icon" onClick={onClick} />
        <div className="nav--title">
          <p>{title}</p>
        </div>
        <div>
          <AiFillAudio className="nav--icon" />
          <IoIosSettings className="nav--icon" />
        </div>
      </div>
    </>
  )
}

NavItem.propTypes = {
  onClick: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
}

export default NavItem;
