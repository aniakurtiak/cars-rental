import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  z-index: 999;
`;

export const Modal = styled.div`
  position: relative;
  padding: 40px;
  width: 541px;
  min-height: 752px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  overflow-y: auto;
  transform: translate(-50%, -50%) scale(1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #121417;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: block;
  padding: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  transform: scale(1);
  transition: transform 100ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ButtonCloseIcon = styled(IoCloseOutline)`
  width: 24px;
  height: 24px;
  display: block;
`;

export const GenInfo = styled.div`
margin-bottom: 14px;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
font-weight: 400;
line-height: 1.5;

` 

export const Img = styled.img`
width: 100%;
height: 248px;
border-radius: 14px;
background: #F3F3F2;
margin-bottom: 14px;

`

export const TitleInfo = styled.h2`
margin-top: 0px;
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 8px;
`
export const Description = styled.p`
font-size: 14px;
line-height: 1.42;
margin: 0px;
`
export const Title = styled.h3`
margin-top: 24px;
margin-bottom: 8px;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.42;
`
export const Info = styled.ul`
display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  padding-left: 0;
  gap: 6px;
  font-size: 12px;
  line-height: 1.5;
`;

export const List = styled.ul`
display: flex;
padding-left: 0px;
margin-top: 4px;
gap: 6px;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`;

export const SomeInfoText = styled.p`
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
border-radius: 35px;
background: #F9F9F9;
margin: 0;
padding: 7px 14px;
`
export const InfoContainer = styled.div`
display: flex;
gap: 8px;
flex-wrap: wrap;
margin-top: 4px;
margin-bottom: 24px;
`
export const SomeValue = styled.span`
color: #3470FF;
font-weight: 600;
`;

export const RentulBtn = styled.button`
padding: 12px 50px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: white;
font-size: 14px;
font-weight: 600;
line-height: 1.42;
/* margin-top: 24px; */
border: none;
cursor: pointer;
width: 168px;
&:hover{
  background: #0B44CD;
  }
`;
