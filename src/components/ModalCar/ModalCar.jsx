import { useEffect, useRef } from 'react';
import {
  Backdrop,
  ButtonClose,
  ButtonCloseIcon,
  Description,
  GenInfo,
  Img,
  InfoContainer,
  Modal,
  RentulBtn,
  SomeInfoText,
  SomeValue,
  Title,
  TitleInfo,
  Info
} from './ModalCar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertById } from '../../redux/selectors';
import { fetchAdvertbyId } from '../../redux/adverts/operations';
import { InfoItem, Model } from 'components/CarsList/CarsList.styled';

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
  };

  const rentalConditionsArray = advertById.rentalConditions.split('\n');

  return (
    <Backdrop ref={backdropRef}>
      <Modal>
        <Img src={advertById.img} alt="car" />
        <TitleInfo>
          {advertById.make} <Model> {advertById.model}</Model>,{' '}
          {advertById.year}
        </TitleInfo>
        <GenInfo>
          <Info>
            <InfoItem>{advertById.address.slice(0, -9)}</InfoItem>
            <InfoItem>{advertById.address.slice(-7)}</InfoItem>
            <InfoItem> Id: {advertById.id} </InfoItem>
            <InfoItem> Year: {advertById.year} </InfoItem>
            <InfoItem>Type: {advertById.type}</InfoItem>
          </Info>
          <Info>
            <InfoItem>Fuel Consumption: {advertById.fuelConsumption}</InfoItem>
            <InfoItem> Engine Size: {advertById.engineSize}</InfoItem>
          </Info>
        </GenInfo>
        <Description>{advertById.description}</Description>
        <div>
          <Title>Accessories and functionalities:</Title>
          <Info>
            {advertById.accessories ? (
              advertById.accessories.map((accessory, index) => (
                <InfoItem key={index}>{accessory}</InfoItem>
              ))
            ) : (
              <li>No accessories available</li>
            )}
          </Info>
          <Info>
            {advertById.functionalities ? (
              advertById.functionalities.map((functionality, index) => (
                <InfoItem key={index}>{functionality}</InfoItem>
              ))
            ) : (
              <li>No accessories available</li>
            )}
          </Info>
        </div>
        <Title>Rental Conditions:</Title>
        <InfoContainer>
          {advertById.rentalConditions ? (
            rentalConditionsArray.slice(0, 1).map((condition, index) => (
              <SomeInfoText key={index} className="first-condition">
                {condition.slice(0, -2)} <SomeValue>{condition.slice(-2)}</SomeValue>
              </SomeInfoText>
            ))
          ) : (
            <li>No accessories available</li>
          )}
             {advertById.rentalConditions ? (
             rentalConditionsArray.slice(1).map((condition, index) => (
              <SomeInfoText key={index}>
                {condition} 
              </SomeInfoText>
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
