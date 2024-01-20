import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Btn,
  Heart,
  HeartBtn,
  HeartBtnDel,
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
import { addFavorites, deleteFavorites } from '../../redux/adverts/operations';
import { ModalCar } from 'components/ModalCar/ModalCar';

export const CarsList = ({ adverts, favoriteMode, deleteMode }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [activeButtons, setActiveButtons] = useState({});
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const initialActiveButtons = {};
    adverts.forEach(advert => {
      initialActiveButtons[advert.id] = favoriteMode
        ? 'favorite'
        : deleteMode
        ? 'delete'
        : 'favorite';
    });
    setActiveButtons(initialActiveButtons);
  }, [adverts, favoriteMode, deleteMode]);

  const handleFavoriteClick = advert => {
    dispatch(addFavorites(advert));
    setActiveButtons(prevState => ({
      ...prevState,
      [advert.id]: 'delete',
    }));
  };

  const handleDeleteFavorite = advert => {
    dispatch(deleteFavorites(advert.id));
    setActiveButtons(prevState => ({
      ...prevState,
      [advert.id]: 'favorite',
    }));
  };

  const openModal = car => {
    setSelectedCar(car);
    setModal(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setModal(false);
  };

  return (
    <div>
      <List>
        {adverts.map(advert => (
          <Item key={advert.id}>
            <div>
              <Img src={advert.img} alt="car" />
            </div>
            <TitleContainer>
              <MainInfo>
                {advert.make} {' '}
               <Model> {advert.model}</Model>, {' '} 
                {advert.year} 
              </MainInfo>
              <Price>{advert.rentalPrice}</Price>
            </TitleContainer>
            <Info>
            {advert.address} 
            {advert.rentalCompany}
            {advert.type}
            {advert.model}
            {advert.id}
            </Info>
            {activeButtons[advert.id] === 'favorite' && (
              <HeartBtn onClick={() => handleFavoriteClick(advert)}>
                <Heart />
              </HeartBtn>
            )}
            {activeButtons[advert.id] === 'delete' && (
              <HeartBtnDel onClick={() => handleDeleteFavorite(advert)}>
                <HeartDel />
              </HeartBtnDel>
            )}
            <Btn onClick={() => openModal(advert)}>Learn more</Btn>
          </Item>
        ))}
      {modal && <ModalCar car={selectedCar} onClose={closeModal} advertId={selectedCar.id}/>}
      </List>
    </div>
  );
};
