import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
