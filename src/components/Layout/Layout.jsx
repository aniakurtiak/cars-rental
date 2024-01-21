import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NLink, NavCotainer, Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <header>
        <Navigation>
          <NavCotainer><NLink to="/">Home</NLink>
          <NLink to="/catalog">Catalog</NLink>
          <NLink to="/favorites">Favorites</NLink>
          </NavCotainer>
        </Navigation>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
