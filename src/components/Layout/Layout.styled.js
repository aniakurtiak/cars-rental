import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-width: 1440px;
  margin: 0, auto;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 10px 15px;
  box-shadow: 1px 12px 18px -10px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 1px 12px 18px -10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 1px 12px 18px -10px rgba(0, 0, 0, 1);
  background: #108dc7; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ef8e38, #108dc7);
  background: linear-gradient(to right, #ef8e38, #108dc7);
  -webkit-backdrop-filter: blur(11px);
  backdrop-filter: blur(11px);
  justify-content: center;
align-items: center;
`;

export const NLink = styled(NavLink)`
font-size: 25px;
font-weight: 700;
color: white;
transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
    scale: 1.1;
    padding: 7px 14px;
    background: rgba(18, 20, 23, 0.5);
    backdrop-filter: blur(11px);
    border-radius: 35px;

}
`
export const NavCotainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 100px;
height: 40px;
width: 300px;

`