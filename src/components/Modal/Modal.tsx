import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import './modal.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FormComponent } from '../Form/Form';
import { TripObj } from '../TripsList/TripsList';

interface ModalProps {
  onModalClose: () => void;
  setTrips: Dispatch<SetStateAction<TripObj[]>>;
}

export const Modal: FC<ModalProps> = ({ onModalClose, setTrips }) => {
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
  return (
    <div className="backdrop" onClick={onCloseBackdrop}>
      <div className="modal">
        <p className="modal__title">Create trip</p>
        <button
          type="button"
          className="btn-modal"
          aria-label="close"
          onClick={onModalClose}
        >
          <AiOutlineCloseCircle width={50} />
        </button>
        <FormComponent setTrips={setTrips} modalClose={onModalClose} />
      </div>
    </div>
  );
};
