import { Adverts } from 'components/Adverts/Adverts';
import { Filters } from 'components/Filters/Filters';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/operations';
// import { selectAdverts } from 'redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  // const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);



  return (
    <div>
      <Filters />
      <Adverts />
    </div>
  );
};

export default Catalog;
