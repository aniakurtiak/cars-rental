import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, fetchAdverts } from '../../redux/adverts/operations';
import {selectVisibleItems } from '../../redux/selectors';
import { Container, Heart, HeartBtn, Img, Item, List } from './Adverts.styled';

export const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectVisibleItems);
  const handleFavoriteClick = (advert) => {
    dispatch(addFavorites(advert));
  };

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Container>
      <List>
        {adverts.map(advert => (
          <Item key={advert.id}>
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
              {advert.id}
            </div>
            <HeartBtn onClick={() => handleFavoriteClick(advert)}>
              <Heart />
            </HeartBtn>
          </Item>
        ))}
      </List>
    </Container>
  );
};
