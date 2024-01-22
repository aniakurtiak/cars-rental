import { FiHeart } from 'react-icons/fi';
import styled from 'styled-components';

export const Cotnainer = styled.div`
max-height: 426px;
`

export const List = styled.ul`
margin-top: 50px;
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  padding-left: 0;
  justify-content: center;
  align-items: center;
`;



export const Img = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const Item = styled.li`
  width: 274px;
  min-height: 426px;
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

export const HeartBtnDel = styled.button`
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
  &:hover {
    scale: 1.1;
  }
  &:focus {
    fill: #3470FF;
    color: #3470FF;
   
  }
`;

export const HeartDel = styled(FiHeart)`
  fill: #3470FF;
  color: #3470FF;
  width: 18px;
  height: 18px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover{
    scale: 1.1;
  }
  &:focus {
    color: white;
    fill: none;
    
  }
`;


export const TitleContainer = styled.div`
margin-top: 14px;
margin-bottom: 8px;
display: flex;
justify-content: space-between;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 1,5%;

`

export const MainInfo = styled.div`
display: flex;

`

export const Price = styled.div`
`

export const Model = styled.span`
color: #3470FF;
white-space: pre;
`

export const Info = styled.ul`
display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  gap: 6px;
  font-size: 12px;
`;

export const InfoItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  margin-left: 0;
  padding-right: 6px; /* Забезпечте простір для відступу від кінця елемента */
  border-right: 1px solid rgba(18, 20, 23, 0.10);

  &:last-child {
    border-right: none; /* Видаляємо праву границю для останнього елемента */
  }
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: #3470FF;
  color: white;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  &:hover {
    background: #0B44CD;
  }
`;
