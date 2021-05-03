import React from 'react';
import PropTypes from 'prop-types';
import './StayCard.scss';
import StarRateIcon from '@material-ui/icons/StarRate';

const StayCard = ({ stay }) => {
  return (
    <div className='stay'>
      <img src={stay.photo} alt='' className='stay-photo' />
      <div className='stay-content'>
        {stay.superHost && <p className='stay-super-host'>Super host</p>}

        <p className='stay-type'>{`${stay.type}`}</p>
        <p className='stay-beds'>{stay.beds && `. ${stay.beds} beds`}</p>

        <p className='stay-rating'>
          <StarRateIcon fontSize='large' />
          <span>{stay.rating}</span>
        </p>
      </div>

      <p className='stay-title'>{stay.title}</p>
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
