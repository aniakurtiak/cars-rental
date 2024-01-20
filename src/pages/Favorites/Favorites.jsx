import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavororiteItems } from '../../redux/selectors';
import { fetchFavorites } from '../../redux/adverts/operations';
import { CarsList } from 'components/CarsList/CarsList';

const Favorites = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFavororiteItems);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div>
      <CarsList adverts={adverts} deleteMode />
    </div>
  );
};

export default Favorites;
