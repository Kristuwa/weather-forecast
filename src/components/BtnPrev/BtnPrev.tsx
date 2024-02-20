import { FC } from "react";
import { GrFormPrevious } from "react-icons/gr";

interface Props {
	prevItem: () => void;
}

export const BtnPrev :FC<Props> = ({prevItem}) => {
	return <button className="btn" onClick={prevItem} type="button"><GrFormPrevious width={40} /></button>
}