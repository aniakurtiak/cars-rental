import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import { selectAdverts } from '../../redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {adverts.map(advert => (
            <li key={advert.id}>
            <div>
                {advert.img}
                {advert.make}
              {advert.model}
                {advert.year}
              {advert.rentalPrice}
              {advert.address}
              {advert.rentalCompany}
              {advert.type}
              {advert.model}
              {advert.id}
            </div>
          </li>
            ))}
      </ul>
    </div>
  );
};

export default Catalog;
