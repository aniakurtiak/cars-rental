import { useDispatch, useSelector } from "react-redux";
import {setSelectedOption } from "../../redux/filters/filtersSlice";
import {selectSelectedOption } from "../../redux/selectors";

export const Filters = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector(selectSelectedOption);
  
    const handleOptionChange = (evt) => {
        dispatch(setSelectedOption(evt.target.value));
      };


    return (
        <div>
        <label>Car brand</label>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="" hidden>
          Enter the text </option>
          <option value="buick">Buick</option>
          <option value="volvo">Volvo</option>
          <option value="hummer">HUMMER</option>
          <option value="subaru">Subaru</option>
          <option value="mitsubishi">Mitsubishi</option>
          <option value="nissan">Nissan</option>
          <option value="lincoln">Lincoln</option>
          <option value="gmc">GMC</option>
          <option value="hyundai">Hyundai</option>
          <option value="mini">MINI</option>
          <option value="bentley">Bentley</option>
          <option value="mercedes-Benz">Mercedes-Benz</option>
          <option value="astonMartin">Aston Martin</option>
          <option value="pontiac">Pontiac</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="chrysler">Chrysler</option>
          <option value="kia">Kia</option>
          <option value="land">Land</option>

        </select>
      </div>
    )
}

