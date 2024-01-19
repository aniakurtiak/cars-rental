import { FiHeart } from 'react-icons/fi';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
`;

export const Container = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const Item = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
`;

export const HeartBtn = styled.button`
position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`;

export const Heart = styled(FiHeart)`
  fill: none;
  color: white;
  width: 18px;
  height: 18px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: #3470FF;
    scale: 1.1;
  }
`;