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
 
