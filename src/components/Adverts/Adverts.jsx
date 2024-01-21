import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, loadMoreAdverts } from '../../redux/adverts/operations';
import {selectVisibleItems } from '../../redux/selectors';
import { CarsList } from 'components/CarsList/CarsList';
import { Cotainer, LoadBtn } from './Adverts.styled';

export const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectVisibleItems);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreAdverts());
  };

  return (
    <Cotainer>
      <div>
        <CarsList adverts={adverts}/>
        </div>
      <LoadBtn onClick={handleLoadMore}>Load more</LoadBtn>
    </Cotainer>
  );
};
