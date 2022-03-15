import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompany } from '../../redux/company/company';
import './Navbar.css';
import NavItem from './NavItem';

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const company = useSelector((state) => state.company);

  const onClick = () => {
    if (pathname === '/') return;
    dispatch(clearCompany());
  };

  useEffect(() => {
    if (pathname !== '/' && Object.keys(company).length === 0) {
      navigate(-1);
    }
  }, [company]);

  return (
    <NavItem title={title} onClick={onClick} />
  );
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

export default Navbar;
