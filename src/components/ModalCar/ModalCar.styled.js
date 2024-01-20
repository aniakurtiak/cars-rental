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
  padding-left: 35px;
  padding-right: 37px;
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
  gap: 24px;
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
