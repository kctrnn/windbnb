import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.svg';
import './Header.scss';
import StayFilter from '../../features/Stay/components/StayFilter';

const Header = (props) => {
  return (
    <div className='header'>
      <img src={Logo} alt='logo' style={{ cursor: 'pointer' }} />

      <StayFilter />
    </div>
  );
};

Header.propTypes = {};

export default Header;
