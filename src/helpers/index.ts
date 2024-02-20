import axios from "axios";

export function convertDateFormat(dateString:string): string {
	const parts = dateString.split('.');
	
	const reversedDate = parts.reverse();
	
	const formattedDate = reversedDate.join('-');
	
	return formattedDate;
 }

 export function getDayOfWeek(dateString: string): string {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const date = new Date(dateString);
	const dayOfWeekIndex = date.getDay();
	return daysOfWeek[dayOfWeekIndex];
 }
 
 export async function getImageCity(city:string) {
	const cityName = city.toLowerCase();
const result = await axios.get(`https://pixabay.com/api/?key=30242343-f6d10ec55d07081d5dcce6a52&q=${cityName}+city+place&image_type=photo`);
const {data: {hits}} = result;
return hits[0].webformatURL;
 }