import React from 'react';
import PropTypes from 'prop-types';
import './StayCard.scss';

const StayCard = ({ stay }) => {
  return (
    <div className='stay'>
      <img src={stay.photo} alt='' className='stay-photo' />
    </div>
  );
};

StayCard.propTypes = {
  stay: PropTypes.object,
};

StayCard.defaultProps = {
  stay: {},
};

export default StayCard;
