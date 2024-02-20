import React, { FC, useEffect, useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { getImageCity } from '../helpers';
import { FaPlus } from 'react-icons/fa6';
import { WeatherToday } from '../components/WeatherToday/WeatherToday';
import { TripObj, TripsList } from '../components/TripsList/TripsList';
import { WeatherForWeek } from '../components/WeatherForWeek/WeatherForWeek';
import './pagesStyle.css';
import { Search } from '../components/Search/Search';
import { BtnPrev } from '../components/BtnPrev/BtnPrev';
import { BtnNext } from '../components/BtnNext/BtnNext';

export const API_KEY = '9BNRSZ6U4FJTP8NR74F69B5S9';
// 'E388VXZX28JTV2DGBV2AP7MEN'

export const HomePage: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [trips, setTrips] = useState<TripObj[]>(() => {
    const storedTrips = localStorage.getItem('TRIPS');
    return storedTrips && storedTrips !== 'null'
      ? JSON.parse(storedTrips)
      : [
          {
            id: '1',
            img: '',
            name: 'Berlin',
            startDate: '14.07.2024',
            endDate: '21.07.2024',
          },
          {
            id: '2',
            img: '',
            name: 'Istanbul',
            startDate: '10.07.2024',
            endDate: '17.07.2024',
          },
          {
            id: '3',
            img: '',
            name: 'Rome',
            startDate: '14.08.2024',
            endDate: '25.08.2024',
          },
        ];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<TripObj>(() => {
    const storedCity = localStorage.getItem('SELECTED_CITY');

    return storedCity && storedCity !== 'null'
      ? JSON.parse(storedCity)
      : {
          id: '1',
          img: '',
          name: 'Berlin',
          startDate: '14.07.2024',
          endDate: '21.07.2024',
        };
  });

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
            const imgUrl = await getImageCity(trip.name);
            return { ...trip, img: imgUrl };
          } else {
            return trip;
          }
        })
      );
      setTrips(updatedTrips);
      localStorage.setItem('TRIPS', JSON.stringify(updatedTrips));
    };
    if (hasEmptyImages) {
      updateTrips();
    }
  }, [trips]);

  useEffect(() => {
    localStorage.setItem('SELECTED_CITY', JSON.stringify(selectedCity));
  }, [selectedCity]);

  const filterTrips = trips.filter(trip =>
    trip.name.toLowerCase().includes(searchText)
  );

  const onPrevItem = () => {
   const index = trips.findIndex(trip => trip.id === selectedCity.id);
	 console.log(index);
	 const newIndex = index - 1;
    if (index > 0) {
      setSelectedCity(trips[newIndex]);
    }
  };

  const onNextItem = () => {
	
    const index = trips.findIndex(trip => trip.id === selectedCity.id);

	 console.log(index);
    if (index < trips.length - 1 && index >= 0) {
		const newIndex = index + 1;
      setSelectedCity(trips[newIndex]);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Weather forecast</h2>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div className="buttons-div">
        <BtnPrev prevItem={onPrevItem} />
        <BtnNext nextItem={onNextItem} />
      </div>
      <div className="container-main">
        <div className="list-container">
          <div className="list">
            <TripsList trips={filterTrips} onChooseCity={setSelectedCity} />
            <button className="button" onClick={openModal} type="button">
              <FaPlus width={40} />
              Add trip
            </button>
          </div>
          <p className="text">Week</p>
          <WeatherForWeek city={selectedCity} />
        </div>

        <WeatherToday
          selectedCity={selectedCity.name}
          date={selectedCity.startDate}
        />
      </div>
      {isModalOpen && <Modal onModalClose={modalClose} />}
    </div>
  );
};
