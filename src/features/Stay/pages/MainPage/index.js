import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import stayApi from '../../../../api/stayApi';
import Header from '../../../../components/Header';
import StayList from '../../components/StayList';
import './MainPage.scss';

const MainPage = () => {
  const [stayList, setStayList] = useState([]);

  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    const fetchStayList = async () => {
      try {
        const response = await stayApi.getAll();
        setStayList(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStayList();
  }, []);

  const filterStayList = (stays) => {
    if (filter.location && filter.maxGuests) {
      return stays.filter(
        (stay) =>
          stay.city === filter.location && stay.maxGuests <= filter.maxGuests
      );
    } else if (filter.location) {
      return stays.filter((stay) => stay.city === filter.location);
    } else if (filter.maxGuests) {
      return stays.filter((stay) => stay.maxGuests <= filter.maxGuests);
    } else {
      return stays;
    }
  };

  const numberOfStay =
    filterStayList(stayList).length > 12
      ? '12+ stays'
      : `${filterStayList(stayList).length} stays`;

  return (
    <div className='windbnb-main'>
      <div className='container'>
        <Header />

        <section className='stay-list'>
          <div className='stay-list-header'>
            <h1 className='stay-list-title'>Stays in Finland</h1>
            <p className='stay-list-number'>{numberOfStay}</p>
          </div>

          <StayList stayList={filterStayList(stayList)} />
        </section>
      </div>
    </div>
  );
};

export default MainPage;
