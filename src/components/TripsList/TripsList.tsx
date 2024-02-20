import { Dispatch, FC, SetStateAction } from "react";
import "./style.css";

export type TripObj = {
	id: string,
	img: string,
	name: string,
	startDate: string,
	endDate: string,
 }

interface TripsListProps {
	trips: TripObj[];
	onChooseCity: Dispatch<SetStateAction<{ id: string; img: string; name: string; startDate: string; endDate: string; }>>;
}

export const TripsList: FC<TripsListProps> = ({trips, onChooseCity}) => {
	return <ul className="trips__list">
	{trips.map(({ id, img, name, startDate, endDate }) => {
	  return (
		 <li className="trips__item" key={id} onClick={()=> {
			onChooseCity({ id, img, name, startDate, endDate });
		 }}>
			<img className="trips__img" src={img} alt="city" />
			<p className="trips__text">{name}</p>
			<p className="trips__date">
			  {startDate} - {endDate}
			</p>
		 </li>
	  );
	})}
 </ul>
};