import { useEffect, useRef } from 'react';
import {
  Backdrop,
  ButtonClose,
  ButtonCloseIcon,
  Description,
  GenInfo,
  Img,
  InfoContainer,
  List,
  Modal,
  RentulBtn,
  SomeInfoText,
  SomeValue,
  Title,
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

    const handleCall = () => {
      window.location.href = 'tel:+380730000000';
    }


    // if (isLoading) {
    //     return <div>Loading...</div>;
    //   }
  return (
    <Backdrop ref={backdropRef}>
      <Modal>
          <Img src={advertById.img} alt="car" />
        <TitleInfo>
          {advertById.make} <Model> {advertById.model}</Model>,{' '}
          {advertById.year}
        </TitleInfo>
        <GenInfo>
          <div>
            {advertById.address} Id: {advertById.id} Year: {advertById.year}{' '}
            Type: {advertById.type}
          </div>
          <div>
            Fuel Consumption: {advertById.fuelConsumption}
            Engine Size: {advertById.engineSize}
          </div>
        </GenInfo>
        <Description>{advertById.description}</Description>
        <div>
          <Title>Accessories and functionalities:</Title>
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
        <Title>Rental Conditions:</Title>
        <InfoContainer>
          {advertById.rentalConditions ? (
            advertById.rentalConditions
              .split('\n')
              .map((condition, index) => (
                <SomeInfoText key={index}>{condition}</SomeInfoText>
              ))
          ) : (
            <li>No accessories available</li>
          )}
          <SomeInfoText>
            Mileage: <SomeValue>{advertById.mileage}</SomeValue>
          </SomeInfoText>
          <SomeInfoText>
            Price: <SomeValue>{advertById.rentalPrice}</SomeValue>
          </SomeInfoText>
        </InfoContainer>
        <RentulBtn onClick={handleCall}>Rental car</RentulBtn>
        <ButtonClose type="button" onClick={onClose}>
          <ButtonCloseIcon />
        </ButtonClose>
      </Modal>
    </Backdrop>
  );
};
