import React,{FC, useEffect} from "react";
import "./modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FormComponent } from "../Form/Form";

interface ModalProps {
	onModalClose: ()=>void;
}

export const Modal: FC<ModalProps> = ({onModalClose})=> {
	useEffect(() => {
		window.addEventListener('keydown', onCloseEsc);
  
		return () => {
		  window.removeEventListener('keydown', onCloseEsc);
		};
	 });
  
	 const onCloseEsc = (e: KeyboardEvent) => {
		if (e.code === 'Escape') {
		  onModalClose();
		}
	 };
  
	 const onCloseBackdrop = (e: React.FormEvent) => {
		if (e.currentTarget === e.target) {
		  onModalClose();
		}
	 };
	return <div className="backdrop" onClick={onCloseBackdrop}>
		<div className="modal">
			<button type="button" className="btn-modal" aria-label="close" onClick={onModalClose}><AiOutlineCloseCircle width={30}/></button>
		<FormComponent />
		</div>
		</div>
}