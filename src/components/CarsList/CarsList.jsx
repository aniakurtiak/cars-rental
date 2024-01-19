import { useDispatch } from 'react-redux';
import { Heart, HeartBtn, Img, Item, List } from './CarsList.styled';
import { addFavorites } from '../../redux/adverts/operations';

export const CarsList = ({ adverts }) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = advert => {
    dispatch(addFavorites(advert));
  };

  return (
    <div>
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
    </div>
  );
};
