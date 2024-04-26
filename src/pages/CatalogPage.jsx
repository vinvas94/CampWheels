import { Catalog } from '../components/Catalog/Catalog';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAdvert } from '../redux/advertSlice';
import { NoContent } from '../components/NoContent/NoContent';
import { filter } from '../redux/filterSlice';
import { filterCars } from '../assets/helpers/FilterFunction';
import { SideBar } from '../components/Sidebar/Filters/Filters';
import { ButtonLoadMore } from 'components/Catalog/Catalog.styled';
import { Container } from 'components/Container/Container';
import Loaders from 'components/Loader/Loader';

export const CatalogPage = () => {
  const allCars = useSelector(getAdvert);
  const filters = useSelector(filter);
  const [cars, setCars] = useState([]);
  const [pag, setPag] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (
      Object.values(filters.radio).every(el => !el) &&
      Object.values(filters.checkBox).every(el => !el) &&
      !filters.location
    ) {
      setCars([...allCars]);
      setIsLoading(false);
      return;
    }
    setCars(filterCars(allCars, filters));
    setIsLoading(false);
  }, [allCars, filters]);

  useEffect(() => {
    setPag(4);
  }, [filters]);

  const handleLoadMore = () => {
    setPag(pag + 4);
  };

  useEffect(() => {
    setCars([...allCars]);
  }, [allCars]);

  return (
    <Container>
      {isLoading && <Loaders />}
      <SideBar />
      <ul>
        {cars.slice(0, pag).map(el => (
          <Catalog key={el._id} adverts={el} />
        ))}
        {cars.length > pag && (
          <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
        )}
      </ul>
    </Container>
  );
};
