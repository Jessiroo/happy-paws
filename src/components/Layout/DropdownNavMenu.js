import { NavLink } from "react-router-dom";

import classes from './DropdownNavMenu.module.css';

const dropdownNavMenu = (props) => {
  const navigatePetsHandler = () => {
    props.onPets();
    props.onNavigate();
  };

  return (
    <div className={classes.dropdownNavLinks}>
      <div className={classes.navLink}>
        <NavLink 
          to='/'
          className={({ isActive }) => isActive ? classes.active : undefined}
          onClick={props.onNavigate}
        >Home</NavLink>
      </div>
      <div className={classes.navLink}>
        <NavLink 
          to='/pets'
          className={({ isActive }) => isActive ? classes.active : undefined}
          onClick={navigatePetsHandler}
        >Pets</NavLink>
      </div>
      <div className={classes.navLink}>
        <NavLink 
          to='/adoption-information'
          className={({ isActive }) => isActive ? classes.active : undefined}
          onClick={props.onNavigate}
        >Adoption Info</NavLink>
      </div>
      <div className={classes.navLink}>
        <NavLink 
          to='/about'
          className={({ isActive }) => isActive ? classes.active : undefined}
          onClick={props.onNavigate}
        >About Us</NavLink>
      </div>
    </div>
  );
};

export default dropdownNavMenu;