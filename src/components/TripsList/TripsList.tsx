import { FC } from "react";

type TripObj = {
	id: string,
	img: string,
	name: string,
	startDate: string,
	endDate: string,
 }

interface TripsListProps {
	trips: TripObj[];
}

export const TripsList: FC<TripsListProps> = ({trips}) => {
	return <ul>
	{trips.map(({ id, img, name, startDate, endDate }) => {
	  return (
		 <li key={id}>
			<img src={img} alt="city" />
			<p>{name}</p>
			<p>
			  {startDate} - {endDate}
			</p>
		 </li>
	  );
	})}
 </ul>
};