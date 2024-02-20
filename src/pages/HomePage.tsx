import React, { FC, useEffect, useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import axios from 'axios';
import { convertDateFormat, getDayOfWeek, getImageCity } from '../helpers';
import { FaPlus } from 'react-icons/fa6';
import { WeatherToday } from '../components/WeatherToday/WeatherToday';
import { TripsList } from '../components/TripsList/TripsList';
import { WeatherForWeek } from '../components/WeatherForWeek/WeatherForWeek';

export const API_KEY = 'E388VXZX28JTV2DGBV2AP7MEN';

export const HomePage: FC = () => {
  const [trips, setTrips] = useState([
    {
      id: "1",
      img: '',
      name: 'Berlin',
      startDate: '14.07.2023',
      endDate: '21.07.2023',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(trips[0]);

  function openModal() {
    setIsModalOpen(true);
  }

  function modalClose() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const hasEmptyImages = trips.some(trip => trip.img === '');
    const updateTrips = async () => {
      const updatedTrips = await Promise.all(
        trips.map(async trip => {
          if (trip.img === '') {
            const imgUrl = await getImageCity(trip.name); // Получить ссылку на изображение города
            return { ...trip, img: imgUrl };
          } else {
            return trip;
          }
        })
      );
      setTrips(updatedTrips);
    };
    if (hasEmptyImages) {
      updateTrips();
    }
  }, [trips]);

  

  return (
    <div className="container">
      <h2>Weather forecast</h2>
      <div>
			<TripsList trips={trips}/>
        <button onClick={openModal} type="button">
          <FaPlus width={40} />
        </button>
      </div>
      <p>Week</p>
<WeatherForWeek city={selectedCity} />
      {isModalOpen && <Modal onModalClose={modalClose} />}
      <WeatherToday selectedCity={selectedCity.name} />
    </div>
  );
};
