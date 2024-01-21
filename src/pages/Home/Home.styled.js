import styled from "styled-components";

export const Container = styled.div`
min-height: 1400px; 
background-image: url(${require('../../img/70.jpg')});
  background-size: cover; /* розтягне фон так, щоб він вкривав всю сторінку */
  background-position: center; /* центрує зображення */
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`

`
export const Title = styled.h2`
margin: 0;
padding-top: 50px;
padding-left: 50px;
font-size: 30px;
font-weight: 700;
`

export const Text = styled.p`
margin: 0;
padding-top: 20px;
padding-left: 50px;
font-size: 20px;
font-weight: 500;
`