import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/selectors';
import { CarsList } from 'components/CarsList/CarsList';
import { FavoritesCotainer } from './Favorites.styled';
import { WaitList } from 'components/WaitList/WailList';

const Favorites = () => {
  const adverts = useSelector(selectFavoriteItems);


  return (
    <FavoritesCotainer>
      {adverts.length > 0 ? (
        <CarsList adverts={adverts} />
      ) : (
        <WaitList />
      )}
    </FavoritesCotainer>
  );
};

export default Favorites;
