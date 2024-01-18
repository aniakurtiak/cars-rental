import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import { selectAdverts } from '../../redux/selectors';
import { Container, Img, Item, List } from './Adverts.styled';

export const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

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
          </Item>
        ))}
      </List>
    </Container>
  );
};
