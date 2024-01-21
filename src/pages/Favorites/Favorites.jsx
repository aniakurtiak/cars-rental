import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/selectors';
import { addFavoritesbyId} from '../../redux/adverts/operations';
import { CarsList } from 'components/CarsList/CarsList';

const Favorites = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFavoriteItems);

  useEffect(() => {
    dispatch(addFavoritesbyId());
  }, [dispatch]);

  return (
    <div>
      <CarsList adverts={adverts} />
    </div>
  );
};

export default Favorites;
