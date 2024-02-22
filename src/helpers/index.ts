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
 
export function dateFormatting (date: Date): string {
	
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
	const year = date.getFullYear();
	
	const formattedDate = `${day}.${month}.${year}`;
	return formattedDate;
}

export function parseDate(date: string) {
	const parts = date.split('.');
  
	const [day, month, year] = parts;
	return `${year}-${month}-${day}`;
}