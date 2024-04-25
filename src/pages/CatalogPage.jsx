import { Catalog } from '../components/Catalog/Catalog';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAdvert } from '../redux/advertSlice';
import { NoContent } from '../components/NoContent/NoContent';
import { filter } from '../redux/filterSlice';
import { filterCars } from '../assets/helpers/FilterFunction';
import { SideBar } from '../components/Sidebar/Filters/Filters';

export const CatalogPage = () => {
  const allCars = useSelector(getAdvert);

  const filters = useSelector(filter);

  const [cars, setCars] = useState([]);
  const [pag, setPag] = useState(4);

  useEffect(() => {
    if (
      Object.values(filters.radio).every(el => Boolean(el) === false) &&
      Object.values(filters.checkBox).every(el => Boolean(el) === false) &&
      !filters.location
    ) {
      setCars(() => [...allCars]);
      return;
    }
    setCars(filterCars(allCars, filters));
  }, [allCars, filters]);

  useEffect(() => {
    setPag(4);
  }, [filters]);

  const handleLoadMore = () => {
    setPag(pag + 4);
  };
  useEffect(() => {
    setCars(() => [...allCars]);
  }, [allCars]);

  return (
    <>
      <SideBar />
      {cars.length ? (
        <ul>
          {cars.slice(0, pag).map(el => (
            <Catalog key={el._id} adverts={el} />
          ))}
          {cars.length > pag && (
            <button onClick={handleLoadMore}>Load more</button>
          )}
        </ul>
      ) : (
        <NoContent />
      )}
    </>
  );
};
