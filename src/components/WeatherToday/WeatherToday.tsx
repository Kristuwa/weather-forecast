import axios from "axios";
import { FC, useEffect, useState } from "react";
import { API_KEY } from "../../pages/HomePage";
import { getDayOfWeek } from "../../helpers";

interface TodayProps {
	selectedCity: string;
}

export const WeatherToday: FC<TodayProps> = ({selectedCity}) => {
	const [day, setDay] = useState("");
	const [temp, setTemp] = useState("");
	const [icon, setIcon] = useState("");
	
	useEffect(()=> {
const getTodayWeather = async () => {
const result = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`);
console.log(result);
const {data: { days}} = result;
const dayToday = getDayOfWeek(days[0].datetime);
setDay(dayToday);
setTemp(days[0].temp);
const imageLink = require(`../../../public/WeatherIcons-main/${days[0].icon}.svg`);
setIcon(imageLink);
}
getTodayWeather()}, [selectedCity]);


;

	return <div><p>{day}</p><div><img src={icon} alt="weather" width={50}/><p>{temp}°C</p></div><p>{selectedCity}</p></div>
}