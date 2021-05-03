import PropTypes from 'prop-types';
import React from 'react';
import StayCard from '../StayCard';
import './StayList.scss';

const StayList = ({ stayList }) => {
  return (
    <div className='stay-list-inner'>
      {stayList.map((stay, index) => (
        <StayCard key={index} stay={stay} />
      ))}
    </div>
  );
};

StayList.propTypes = {
  stayList: PropTypes.array,
};

StayList.defaultProps = {
  stayList: [],
};

export default StayList;
