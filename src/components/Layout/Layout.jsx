import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
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
    </Container>
  );
};
