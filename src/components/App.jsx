import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { FavoritesPage } from '../pages/FavoritesPage';

import { Layout } from './Layout/Layout';

import { fetchData } from '../services/Api';

import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
