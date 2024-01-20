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
  padding-left: 40px;
  padding-right: 40px;
  width: 541px;
  height: 752px;
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
width: 461px;
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
export const AccessoriesTitle = styled.h3`
margin-top: 24px;
margin-bottom: 4px;
`
export const List = styled.ul`
display: flex;
padding-left: 0px;
margin-top: 4px;
gap: 6px;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 1.5;
`