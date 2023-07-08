import { useState, useContext } from 'react';

import FilterContext from '../../context/filter-context';
import Modal from '../Layout/Modal';
import Button from '../Layout/Button';
import classes from './SelectFilters.module.css';

const SelectFilters = (props) => {
  const filterCtx = useContext(FilterContext);
  const [selectedSpecies, setSelectedSpecies] = useState(undefined);
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [selectedHair, setSelectedHair] = useState(undefined);

  // CHANGE & SUBMIT HANDLERS
  const speciesChangeHandler = (event) => {
    setSelectedSpecies(event.target.value);
  };
  const sizeChangeHandler = (event) => {
    setSelectedSize(event.target.value);
  };
  const hairChangeHandler = (event) => {
    setSelectedHair(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    filterCtx.selectFilters({
      species: selectedSpecies ? selectedSpecies : undefined,
      size: selectedSize ? selectedSize : undefined,
      hair: selectedHair ? selectedHair : undefined,
    });
    props.onClose();
  };
  
  // COMPONENT
  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form}>
        <h1>Filters:</h1>
        <fieldset>
          <h2>Species:</h2>
          <div className={classes.inputs}>
            <div>
              <input 
                type="radio"
                id="speciesDog"
                name="species"
                value="Dog"
                onChange={speciesChangeHandler}
              />
              <label htmlFor="speciesDog">Dog</label>
            </div>
            <div>
              <input 
                type="radio"
                id="speciesCat"
                name="species"
                value="Cat"
                onChange={speciesChangeHandler}
              />
              <label htmlFor="speciesCat">Cat</label>
            </div>
            <div>
              <input 
                type="radio"
                id="speciesExotic"
                name="species"
                value="Exotic"
                onChange={speciesChangeHandler}
              />
              <label htmlFor="speciesExotic">Exotic</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <h2>Size:</h2>
          <div className={classes.inputs}>
            <div>
              <input 
                type="radio"
                id="sizeSmall"
                name="size"
                value="Small"
                onChange={sizeChangeHandler}
              />
              <label htmlFor="speciesSmall">Small</label>
            </div>
            <div>
              <input 
                type="radio"
                id="sizeMedium"
                name="size"
                value="Medium"
                onChange={sizeChangeHandler}
              />
              <label htmlFor="sizeMedium">Medium</label>
            </div>
            <div>
              <input 
                type="radio"
                id="sizeLarge"
                name="size"
                value="Large"
                onChange={sizeChangeHandler}
              />
              <label htmlFor="sizeLarge">Large</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <h2>Hair Type:</h2>
          <div className={classes.inputs}>
            <div>
              <input 
                type="radio"
                id="hairShort"
                name="hair"
                value="Short"
                onChange={hairChangeHandler}
              />
              <label htmlFor="hairShort">Short</label>
            </div>
            <div>
              <input 
                type="radio"
                id="hairLong"
                name="hair"
                value="Long"
                onChange={hairChangeHandler}
              />
              <label htmlFor="hairLong">Long</label>
            </div>
            <div>
              <input 
                type="radio"
                id="hairNoShed"
                name="hair"
                value="Non-Shedding"
                onChange={hairChangeHandler}
              />
              <label htmlFor="hairNoShed">Non-Shedding</label>
            </div>
            <div>
              <input 
                type="radio"
                id="hairOther"
                name="hair"
                value="Other"
                onChange={hairChangeHandler}
              />
              <label htmlFor="hairOther">Other</label>
            </div>
          </div>
        </fieldset>
        <div className={classes.button}>
          <Button className='white' type="button" onClick={props.onClose}>Close</Button>
          <Button className='green' type="submit" onClick={submitHandler}>Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default SelectFilters;