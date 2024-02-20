import React, { FC, useState } from "react";
import { Modal } from "../components/Modal/Modal";

export const HomePage: FC  = () => {
	const [trips, setTrips] = useState([{id: 1, img:"", name: "Berlin", startDate: "14.07.2023", endDate: "21.07.2023"}])
const [isModalOpen, setIsModalOpen] = useState(false);
function openModal() {
setIsModalOpen(true);
}

function modalClose () {
	setIsModalOpen(false);
}

 return <div className="container">
	<h2>Weather forecast</h2>
<div>
	<ul>{trips.map(({id, img, name, startDate, endDate}) => <li key={id}><img src={img} alt="city" /><p>{name}</p><p>{startDate} - {endDate}</p></li>)}</ul>
	<button onClick={openModal} type="button">plus</button>
	</div>
<p>Week</p>
<ul></ul>
{isModalOpen && <Modal onModalClose={modalClose}/>}
 </div>
};