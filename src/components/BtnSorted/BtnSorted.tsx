import { FC } from "react";

interface Props {
	onSort: () => void;
}

export const BtnSorted: FC<Props> = ({onSort}) => {
	return <button className="btn" onClick={onSort} type="button">Sort</button>
}