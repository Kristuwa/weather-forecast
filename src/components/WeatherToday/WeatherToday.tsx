import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { API_KEY } from '../../pages/HomePage';
import { getDayOfWeek } from '../../helpers';
import { calculateCountdown } from '../../helpers/timer';
import './style.css';

interface TodayProps {
  selectedCity: string;
  date: string;
}

export const WeatherToday: FC<TodayProps> = ({ selectedCity, date }) => {
  const [day, setDay] = useState('');
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');
  const [timerObj, setTimerObj] = useState(calculateCountdown(date));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerObj(calculateCountdown(date));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  useEffect(() => {
    const getTodayWeather = async () => {
      const result = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
      );
      const {
        data: { days },
      } = result;
      const dayToday = getDayOfWeek(days[0].datetime);
      setDay(dayToday);
      setTemp(days[0].temp);
      const imageLink = require(`../../../public/WeatherIcons-main/${days[0].icon}.svg`);
      setIcon(imageLink);
    };
    getTodayWeather();
  }, [selectedCity]);

  return (
    <div className="card">
      <p className="card__day">{day}</p>
      <div className="card__temp">
        <img src={icon} alt="weather" width={50} />
        <p>{temp}°C</p>
      </div>
      <p className="card__city">{selectedCity}</p>
      <div className="card__list">
        <div className="card__item">
          <p className="card__number">{timerObj.days}</p>
          <p className="card__text">days</p>
        </div>
        <div className="card__item">
          <p className="card__number">{timerObj.hours}</p>
          <p className="card__text">hours</p>
        </div>
        <div className="card__item">
          <p className="card__number">{timerObj.minutes}</p>
          <p className="card__text">minutes</p>
        </div>
        <div className="card__item">
          <p className="card__number">{timerObj.seconds}</p>
          <p className="card__text">seconds</p>
        </div>
      </div>
    </div>
  );
};
