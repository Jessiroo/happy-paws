import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import FilterContext from '../../context/filter-context';
import classes from './PetListItem.module.css';

const PetListItem = (props) => {
  const blurbText = props.text.substring(0, 250);
  const textOutput = blurbText.trim().concat('', '...');
  const filterCtx = useContext(FilterContext);
  const navigate = useNavigate();

  const viewPetHandler = () => {
    filterCtx.setScroll(window.scrollY);
    navigate(props.id);
  };

  return (
    <div className={classes.petCard} onClick={viewPetHandler}>

      <h1>{props.name}</h1>
      <img src={props.thumbnail} alt='' />
      <p>{textOutput}</p>
    </div>
  );
};

export default PetListItem;