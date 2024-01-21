import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/selectors';
import { addFavoritesbyId} from '../../redux/adverts/operations';
import { CarsList } from 'components/CarsList/CarsList';
import { FavoritesCotainer } from './Favorites.styled';

const Favorites = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFavoriteItems);

  useEffect(() => {
    dispatch(addFavoritesbyId());
  }, [dispatch]);

  return (
    <FavoritesCotainer>
      <CarsList adverts={adverts} />
    </FavoritesCotainer>
  );
};

export default Favorites;
