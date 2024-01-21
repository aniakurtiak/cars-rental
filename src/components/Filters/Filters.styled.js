import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
margin-top: 50px;
margin-bottom: 50px;
margin-left: 180px;
`

// export const StyledForm = styled(Form)`
//   margin-top: ${theme.spacing(25)};
//   margin-bottom: ${theme.spacing(25)};
//   display: flex;
//   justify-content: center;
//   align-items: end;
//   &:first-child {
//     width: 220px;
//   }
// `;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const StyledSelect = styled(Select)`
max-width: 224px;
border-radius: 14px;
background: #F7F7FB;

.react-select__value {
font-size: 16px;
line-height: 1.25;
box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02); }
color: rgba(18, 20, 23, 0.20);
font-weight: 500;


.react-select__placeholder {
color: #121417;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.11;
}
`;
