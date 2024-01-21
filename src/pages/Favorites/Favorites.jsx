import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/selectors';
import { CarsList } from 'components/CarsList/CarsList';
import { FavoritesCotainer } from './Favorites.styled';

const Favorites = () => {
  const adverts = useSelector(selectFavoriteItems);


  return (
    <FavoritesCotainer>
      <CarsList adverts={adverts} />
    </FavoritesCotainer>
  );
};

export default Favorites;
