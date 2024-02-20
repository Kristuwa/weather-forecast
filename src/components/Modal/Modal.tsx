import React,{FC, useEffect} from "react";

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
	return <div onClick={onCloseBackdrop}>Modal</div>
}