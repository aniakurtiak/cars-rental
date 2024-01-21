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
} from './CarsList.styled';
import { ModalCar } from 'components/ModalCar/ModalCar';
import { deleteFavorites } from '../../redux/adverts/advertsSlice';
import { addFavoritesbyId } from '../../redux/adverts/operations';
import { selectFavoriteItems} from '../../redux/selectors';

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
    console.log(currentId);
    
   
      const index = favorites.findIndex(item => item.id === currentId);
      if (index !== -1) {
        dispatch(deleteFavorites(currentId));
      } else {
        dispatch(addFavoritesbyId(currentId));
      }
  };

  return (
    <div>
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
              {advert.address}
              {advert.rentalCompany}
              {advert.type}
              {advert.model}
              {advert.id}
              {advert.accessories.slice(0, 1)}
            </Info>
            <HeartBtn type="button" onClick={() => addFavorite(advert)}>
              {adverts.some(item => item.id === advert.id) ? (
                <Heart />
              ) : (
                <HeartDel />
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
    </div>
  );
};
