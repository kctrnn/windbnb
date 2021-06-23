import React from 'react';
import Logo from '../../assets/images/logo.svg';
import StayFilter from '../../features/Stay/components/StayFilter';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <a href='/' className='header-logo'>
        <img src={Logo} alt='logo' style={{ cursor: 'pointer' }} />
      </a>

      <StayFilter />
    </div>
  );
};

export default Header;
