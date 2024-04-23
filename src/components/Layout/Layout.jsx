import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link data-name="home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link data-name="catalog" to="/catalog">
              Catalog
            </Link>
          </li>
          <li>
            <Link data-name="favorites" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
