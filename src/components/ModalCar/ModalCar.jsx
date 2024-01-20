import { useEffect, useRef } from 'react';
import { Backdrop, ButtonClose, ButtonCloseIcon, Modal } from './ModalCar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/selectors';
import { fetchAdvertbyId } from '../../redux/adverts/operations';

export const ModalCar = ({ onClose, advertId}) => {
  const backdropRef = useRef(null);
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertbyId(advertId));
  }, [dispatch, advertId]);

console.log(adverts);

  useEffect(() => {
    const handleClick = e => {
      if (e.target === backdropRef.current) {
        onClose();
      }
    };

    const handleKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const backdrop = backdropRef.current;
    if (backdrop) {
      document.addEventListener('keydown', handleKeydown);
      backdrop.addEventListener('click', handleClick);
    }

    return () => {
      if (backdrop) {
        backdrop.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeydown);
      }
    };
  }, [onClose]);

  return (
    <Backdrop ref={backdropRef}>
      <Modal>
      <ButtonClose type="button" onClick={onClose}>
        <ButtonCloseIcon />
      </ButtonClose>
      </Modal>
    </Backdrop>
  );
};
