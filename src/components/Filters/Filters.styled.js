import Select from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
margin-top: 50px;
margin-left: 180px;
display: flex;
flex-direction: column;
`
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: #8A8A89;
line-height: 1.8;
`;

export const StyledSelect = styled(Select)`
width: 224px;
color: #121417;

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

.react-select__control {
    border: none;
    box-shadow: none;
    border-radius: 14px;
background: #F7F7FB;
padding: 14px 14px 14px 18px;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    color: #121417;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 0.9;
    }
  }
`;
