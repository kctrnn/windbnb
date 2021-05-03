import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGuests, addLocation } from '../../../../app/filterSlice';
import './StayFilter.scss';

const StayFilter = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [locationActive, setLocationActive] = useState(false);
  const [guestsActive, setGuestsActive] = useState(false);

  const [selectedItem, setSelectedItem] = useState('');

  const [count, setCount] = useState(0);
  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);

  const dispatch = useDispatch();

  const handleSearchClick = () => {
    setFilterActive(false);
    setLocationActive(false);
    setGuestsActive(false);

    const actionLocation = addLocation(selectedItem);
    const actionGuests = addGuests(count);

    dispatch(actionLocation);
    dispatch(actionGuests);
  };

  const handleOverlayClick = () => {
    setFilterActive(false);
    setLocationActive(false);
    setGuestsActive(false);

    setSelectedItem('');
  };

  const handleLocationClick = () => {
    setFilterActive(true);

    setLocationActive((x) => !x);
    setGuestsActive(false);
  };

  const handleGuestsClick = () => {
    setFilterActive(true);

    setGuestsActive(true);
    setLocationActive(false);
  };

  const handleDropdownItemClick = (event) => {
    const { value } = event.target.dataset;
    setSelectedItem(value);
  };

  useEffect(() => {
    setCount(countAdults + countChildren);
  }, [countAdults, countChildren]);

  const stayFilterClass = classNames('stay-filter', { active: filterActive });

  const locationClass = classNames('stay-filter-location dropdown', {
    active: locationActive,
  });
  const guestsClass = classNames('stay-filter-guests', {
    active: guestsActive,
  });

  const locationTextContent = selectedItem
    ? `${selectedItem}, Finland`
    : 'Add location';

  const guestsTextContent =
    count > 1 ? `${count} guests` : count === 1 ? '1 guest' : 'Add guests';

  const cityList = ['Helsinki', 'Turku', 'Oulu', 'Vaasa'];

  return (
    <div className={stayFilterClass}>
      <div className='stay-filter-overlay' onClick={handleOverlayClick}></div>

      <div className='stay-filter-body'>
        <div className='stay-filter-inner'>
          <div className={locationClass} onClick={handleLocationClick}>
            <p className='stay-filter-name'>Location</p>

            <p
              className='stay-filter-text'
              style={{ color: selectedItem && '#333' }}
            >
              {locationTextContent}
            </p>

            {selectedItem && filterActive && (
              <span
                className='stay-filter-icon'
                onClick={() => setSelectedItem('')}
              >
                <ClearIcon fontSize='large' />
              </span>
            )}

            <ul className='dropdown-list'>
              {cityList.map((city, index) => (
                <li
                  key={index}
                  className='dropdown-item'
                  data-value={city}
                  onClick={handleDropdownItemClick}
                >{`${city}, Finland`}</li>
              ))}
            </ul>
          </div>

          <div className={guestsClass} onClick={handleGuestsClick}>
            <p className='stay-filter-name'>Guests</p>

            <p
              className='stay-filter-text'
              style={{ color: count > 0 && '#333' }}
            >
              {guestsTextContent}
            </p>

            {count > 0 && filterActive && (
              <span
                className='stay-filter-icon'
                onClick={() => {
                  setCountAdults(0);
                  setCountChildren(0);
                }}
              >
                <ClearIcon fontSize='large' />
              </span>
            )}

            <div className='guests-counter'>
              <div className='guests-counter-item'>
                <p className='guests-counter-name'>Adults</p>
                <p className='guests-counter-desc'>Ages 13 or above</p>
                <p className='guests-counter-number'>
                  <span
                    className={!countAdults && 'disable'}
                    onClick={() => setCountAdults(countAdults - 1)}
                  >
                    -
                  </span>
                  <span>{countAdults}</span>
                  <span onClick={() => setCountAdults(countAdults + 1)}>+</span>
                </p>
              </div>

              <div className='guests-counter-item'>
                <p className='guests-counter-name'>Children</p>
                <p className='guests-counter-desc'>Ages 2-12</p>
                <p className='guests-counter-number'>
                  <span
                    className={!countChildren && 'disable'}
                    onClick={() => setCountChildren(countChildren - 1)}
                  >
                    -
                  </span>
                  <span>{countChildren}</span>
                  <span onClick={() => setCountChildren(countChildren + 1)}>
                    +
                  </span>
                </p>
              </div>
            </div>
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

export default StayFilter;
