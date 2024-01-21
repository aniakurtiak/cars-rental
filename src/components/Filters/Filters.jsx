import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../../redux/filters/filtersSlice';
import { selectSelectedOption } from '../../redux/selectors';
import { Container, StyledLabel, StyledSelect } from './Filters.styled';

const options = [
  {value: 'all', label: 'All car'},
  { value: 'buick', label: 'Buick' },
  { value: 'volvo', label: 'Volvo' },
  { value: 'hummer', label: 'HUMMER' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'lincoln', label: 'Lincoln' },
  { value: 'gmc', label: 'GMC' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'mini', label: 'MINI' },
  { value: 'bentley', label: 'Bentley' },
  { value: 'mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'aston Martin', label: 'Aston Martin' },
  { value: 'pontiac', label: 'Pontiac' },
  { value: 'lamborghini', label: 'Lamborghini' },
  { value: 'audi', label: 'Audi' },
  { value: 'bmw', label: 'BMW' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'chrysler', label: 'Chrysler' },
  { value: 'kia', label: 'Kia' },
  { value: 'land', label: 'Land' },
];

export const Filters = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectSelectedOption);

  const handleOptionChange = selectedOption => {
    dispatch(setSelectedOption(selectedOption.value));
  };

  return (
    <Container>
      <StyledLabel>Car brand</StyledLabel>
      <StyledSelect
        value={options.find(option => option.value === selectedOption)}
        options={options}
        onChange={handleOptionChange}
        isSearchable
        placeholder="Enter the text"
        classNamePrefix="react-select"
      />
    </Container>
  );
};