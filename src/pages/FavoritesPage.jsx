import { getFavorites } from '../redux/favoriteSlice';

import { useSelector } from 'react-redux';
import { Catalog } from '../components/Catalog/Catalog';
import { Container } from 'components/Container/Container';
import { useEffect, useState } from 'react';
import Loaders from 'components/Loader/Loader';

export const FavoritesPage = () => {
  const adverts = useSelector(getFavorites);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    });
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loaders />
      ) : (
        <ul>
          {adverts.map(el => (
            <Catalog key={el._id} adverts={el} />
          ))}
        </ul>
      )}
    </Container>
  );
};
