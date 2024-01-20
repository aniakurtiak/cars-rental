import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Heart, HeartBtn, HeartBtnDel, HeartDel, Img, Item, List } from './CarsList.styled';
import { addFavorites, deleteFavorites } from '../../redux/adverts/operations';

export const CarsList = ({ adverts, favoriteMode, deleteMode }) => {
  const dispatch = useDispatch();

  const [activeButtons, setActiveButtons] = useState({});

  useEffect(() => {
    const initialActiveButtons = {};
    adverts.forEach(advert => {
      initialActiveButtons[advert.car_id] = favoriteMode ? 'favorite' : deleteMode ? 'delete' : 'favorite';
    });
    setActiveButtons(initialActiveButtons);
  }, [adverts, favoriteMode, deleteMode]);

  const handleFavoriteClick = advert => {
    dispatch(addFavorites(advert));
    setActiveButtons(prevState => ({ ...prevState, [advert.car_id]: 'delete' }));
  };

  const handleDeleteFavorite = advert => {
    dispatch(deleteFavorites(advert.id));
    setActiveButtons(prevState => ({ ...prevState, [advert.car_id]: 'favorite' }));
  };

  return (
    <div>
      <List>
        {adverts.map(advert => (
          <Item key={advert.car_id}>
            <div>
              <Img src={advert.img} alt="car" />
            </div>
            <div>
              {advert.make}
              {advert.model}
              {advert.year}
              {advert.rentalPrice}
            </div>
            <div>
              {advert.address}
              {advert.rentalCompany}
              {advert.type}
              {advert.model}
              {advert.car_id}
            </div>
            {activeButtons[advert.car_id] === 'favorite' && (
              <HeartBtn onClick={() => handleFavoriteClick(advert)}>
                <Heart />
              </HeartBtn>
            )}
            {activeButtons[advert.car_id] === 'delete' && (
              <HeartBtnDel onClick={() => handleDeleteFavorite(advert)}>
                <HeartDel />
              </HeartBtnDel>
            )}
          </Item>
        ))}
      </List>
    </div>
  );
};
