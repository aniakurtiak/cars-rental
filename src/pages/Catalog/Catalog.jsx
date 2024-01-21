import { Adverts } from 'components/Adverts/Adverts';
import { Filters } from 'components/Filters/Filters';
import { CatalogCotainer } from './Catalog.styled';

const Catalog = () => {

  return (
    <CatalogCotainer>
      <Filters />
      <Adverts />
    </CatalogCotainer>
  );
};

export default Catalog;
