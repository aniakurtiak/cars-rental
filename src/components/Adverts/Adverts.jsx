import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectVisibleItems } from '../../redux/selectors';
import { CarsList } from 'components/CarsList/CarsList';

export const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectVisibleItems);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <CarsList adverts={adverts} favoriteMode />
    </div>
  );
};
