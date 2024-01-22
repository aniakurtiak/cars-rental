import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Btn,
  Heart,
  HeartBtn,
  HeartDel,
  Img,
  Info,
  Item,
  List,
  MainInfo,
  Model,
  Price,
  TitleContainer,
  InfoItem,
} from './CarsList.styled';
import { ModalCar } from 'components/ModalCar/ModalCar';
import { deleteFavorites } from '../../redux/adverts/advertsSlice';
import { addFavoritesbyId } from '../../redux/adverts/operations';
import { selectFavoriteItems } from '../../redux/selectors';

export const CarsList = ({ adverts }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const favorites = useSelector(selectFavoriteItems);

  const openModal = car => {
    setSelectedCar(car);
    setModal(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setModal(false);
  };

  const addFavorite = advert => {
    const currentId = advert.id;
    const index = favorites.findIndex(item => item.id === currentId);
    if (index !== -1) {
      dispatch(deleteFavorites(currentId));
    } else {
      dispatch(addFavoritesbyId(currentId));
    }
  };

  return (
      <List>
        {adverts.map(advert => (
          <Item key={advert.id} id={advert.id}>
            <div>
              <Img src={advert.img} loading="lazy" alt="car" />
            </div>
            <TitleContainer>
              <MainInfo>
                {advert.make} <Model> {advert.model}</Model>, {advert.year}
              </MainInfo>
              <Price>{advert.rentalPrice}</Price>
            </TitleContainer>
            <Info>
              <InfoItem>{advert.address.slice(0, -9)}</InfoItem>
              <InfoItem>{advert.address.slice(-7)}</InfoItem>
              <InfoItem>{advert.rentalCompany}</InfoItem>
              <InfoItem>Premium</InfoItem>
              <InfoItem>{advert.type}</InfoItem>
              <InfoItem>{advert.model}</InfoItem>
              <InfoItem>{advert.id}</InfoItem>
              <InfoItem>{advert.functionalities.slice(0, 1)}</InfoItem>
            </Info>
            <HeartBtn type="button" onClick={() => addFavorite(advert)}>
              {favorites.some(item => item.id === advert.id) ? (
                <HeartDel />
              ) : (
                <Heart />
              )}
            </HeartBtn>
            <Btn onClick={() => openModal(advert)}>Learn more</Btn>
          </Item>
        ))}
        {modal && (
          <ModalCar
            car={selectedCar}
            onClose={closeModal}
            advertId={selectedCar.id}
          />
        )}
      </List>
  );
};
