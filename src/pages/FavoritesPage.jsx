import { getFavorites } from '../redux/favoriteSlice';

import { useSelector } from 'react-redux';
import { Catalog } from '../components/Catalog/Catalog';

export const FavoritesPage = () => {
  const adverts = useSelector(getFavorites);

  return (
    <>
      <ul>
        {adverts.map(el => (
          <Catalog key={el._id} adverts={el} />
        ))}
      </ul>
    </>
  );
};
