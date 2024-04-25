import { getFavorites } from '../redux/favoriteSlice';

import { useSelector } from 'react-redux';
import { Catalog } from '../components/Catalog/Catalog';
import { Container } from 'components/Container/Container';

export const FavoritesPage = () => {
  const adverts = useSelector(getFavorites);

  return (
    <Container>
      <ul>
        {adverts.map(el => (
          <Catalog key={el._id} adverts={el} />
        ))}
      </ul>
    </Container>
  );
};
