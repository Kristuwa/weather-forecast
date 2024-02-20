import { FC, useEffect, useState } from "react";
import { convertDateFormat, getDayOfWeek } from "../../helpers";
import axios from "axios";
import { API_KEY } from "../../pages/HomePage";

interface WeekProps {
	city: {name: string, startDate: string,  endDate: string,};
}

export const WeatherForWeek: FC<WeekProps> = ({city}) => {

	const [weatherForWeek, setWeatherForWeek] = useState([]);

	async function getWeather(name: string, startDate: string, endDate: string) {
		const normalStartDate = convertDateFormat(startDate);
		const normalEndDate = convertDateFormat(endDate);
		const result = await axios.get(
		  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}/${normalStartDate}/${normalEndDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
		);
		const {
		  data: { days },
		} = result;
		setWeatherForWeek(days);
	 }
  
	 useEffect(() => {
		getWeather(city.name, city.startDate, city.endDate);
	 }, [city]);

	return <ul>
	{weatherForWeek.map(({ datetime, temp, icon }) => {
	  const day = getDayOfWeek(datetime);
	  const imageLink = require(`../../../public/WeatherIcons-main/${icon}.svg`);
	  return (
		 <li key={datetime}>
			<p>{day}</p>
			<img src={imageLink} alt="weather" width="30" />
			<p>{temp}°C</p>
		 </li>
	  );
	})}
 </ul>
}