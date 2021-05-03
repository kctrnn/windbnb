import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import './StayFilter.scss';
import classNames from 'classnames';

const StayFilter = (props) => {
  const [filterActive, setFilterActive] = useState(false);

  const [locationActive, setLocationActive] = useState(false);
  const [guestsActive, setGuestsActive] = useState(false);

  const handleSearchClick = () => {
    setFilterActive(false);
  };

  const handleLocationClick = () => {
    setFilterActive(true);

    setLocationActive((x) => !x);
    setGuestsActive(false);
  };

  const handleGuestsClick = () => {
    setFilterActive(true);

    setGuestsActive((x) => !x);
    setLocationActive(false);
  };

  const stayFilterClass = classNames('stay-filter', { active: filterActive });

  const locationClass = classNames('stay-filter-location', {
    active: locationActive,
  });
  const guestsClass = classNames('stay-filter-guests', {
    active: guestsActive,
  });

  return (
    <div className={stayFilterClass}>
      <div
        className='stay-filter-overlay'
        onClick={() => setFilterActive(false)}
      ></div>

      <div className='stay-filter-body'>
        <div className='stay-filter-inner'>
          <div className={locationClass} onClick={handleLocationClick}>
            <p className='stay-filter-name'>Location</p>
            <p className='stay-filter-text'>Add location</p>
          </div>

          <div className={guestsClass} onClick={handleGuestsClick}>
            <p className='stay-filter-name'>Guests</p>
            <p className='stay-filter-text'>Add guests</p>
          </div>

          <div className='stay-filter-search' onClick={handleSearchClick}>
            <SearchIcon color='secondary' fontSize='large' />
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

StayFilter.propTypes = {};

export default StayFilter;
