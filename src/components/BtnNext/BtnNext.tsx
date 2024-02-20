import { FC } from "react";
import { GrFormNext } from "react-icons/gr";

interface Props {
	nextItem: () => void;
}

export const BtnNext :FC<Props> = ({nextItem}) => {
	return <button className="btn" onClick={nextItem} type="button"><GrFormNext width={50}/></button>
}