import { useEffect, useRef } from 'react';
import {
  AccessoriesList,
  AccessoriesTitle,
  Backdrop,
  ButtonClose,
  ButtonCloseIcon,
  Description,
  GenInfo,
  Img,
  List,
  Modal,
  TitleInfo,
} from './ModalCar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertById } from '../../redux/selectors';
import { fetchAdvertbyId } from '../../redux/adverts/operations';
import { Model } from 'components/CarsList/CarsList.styled';

export const ModalCar = ({ onClose, advertId }) => {
  const backdropRef = useRef(null);
  const advertById = useSelector(selectAdvertById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertbyId(advertId));
  }, [dispatch, advertId]);

  // console.log(advertById);

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
        <div>
          <Img src={advertById.img} alt="car" />
        </div>
        <TitleInfo>
          {advertById.make} <Model> {advertById.model}</Model>,{' '}
          {advertById.year}
        </TitleInfo>
        <GenInfo>
          <div>
            {advertById.address}
            Id: {advertById.id}
            Year: {advertById.year}
            Type: {advertById.type}
          </div>
          <div>
            Fuel Consumption: {advertById.fuelConsumption}
            Engine Size: {advertById.engineSize}
          </div>
        </GenInfo>
        <Description>{advertById.description}</Description>
        <div>
          <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
          <List>
            {advertById.accessories ? (
              advertById.accessories.map((accessory, index) => (
                <li key={index}>{accessory}</li>
              ))
            ) : (
              <li>No accessories available</li>
            )}
          </List>
          <List>
            {advertById.functionalities ? (
              advertById.functionalities.map((functionality, index) => (
                <li key={index}>{functionality}</li>
              ))
            ) : (
              <li>No accessories available</li>
            )}
          </List>
        </div>

        <ButtonClose type="button" onClick={onClose}>
          <ButtonCloseIcon />
        </ButtonClose>
      </Modal>
    </Backdrop>
  );
};
