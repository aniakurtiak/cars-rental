import { useDispatch } from 'react-redux';
import { Heart, HeartBtn, Img, Item, List } from './CarsList.styled';
import { addFavorites, deleteFavorites } from '../../redux/adverts/operations';

export const CarsList = ({ adverts }) => {
  const dispatch = useDispatch();

  
  const handleFavoriteClick = advert => {
    console.log('Before dispatching addFavorites:', advert.id);
    dispatch(addFavorites(advert));
    console.log('After dispatching addFavorites');
  };

// const handleFavoriteClick = async advert => {
//     try {
//       const response = await dispatch(addFavorites(advert));
//       // Здійсніть виклик функції onFavoriteUpdate з оновленим id
//       onFavoriteUpdate(advert.id, response.payload.id);
//     } catch (error) {
//       console.error('Error adding to favorites:', error);
//     }
//   };
 

  const handleDeleteFavorite= advert => {
    dispatch(deleteFavorites(advert.id));
  };

// const handleFavoriteClick = advert => {
//     const isFavorite = adverts.some(item => item.id === advert.id);
  
//     if (isFavorite) {
//       dispatch(deleteFavorites(advert.id));
//     } else {
//       dispatch(addFavorites(advert));
//     }
//   };
  

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
            <button onClick={() => handleDeleteFavorite(advert)}>Delete </button>
          </Item>
        ))}
      </List>
    </div>
  );
};
