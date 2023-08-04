import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import DropdownNavMenu from './DropdownNavMenu';
import topImage from '../../assets/playingdog.jpg';
import bottomImage from '../../assets/kitten.jpg';
import classes from './Header.module.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownToggleHandler = () => {
    setShowDropdown(!showDropdown);
  };

  // COMPONENT RETURN
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <h1>Happy Paws Adoptions</h1>
        </div>
        <span className={classes.expandedNavLinks}>
          <NavLink 
            to='/'
            className={({ isActive }) => isActive ? classes.active : undefined}
          >Home</NavLink>
          <NavLink 
            to='/pets'
            className={({ isActive }) => isActive ? classes.active : undefined}
          >Pets</NavLink>
          <NavLink 
            to='/adoption-information'
            className={({ isActive }) => isActive ? classes.active : undefined}
          >Adoption Info</NavLink>
          <NavLink 
            to='/about'
            className={({ isActive }) => isActive ? classes.active : undefined}
          >About Us</NavLink>
        </span>
        <button 
          className={classes.navButton}
          onClick={dropdownToggleHandler}
        >&#9776;</button>
        {showDropdown && 
          <DropdownNavMenu 
            onNavigate={dropdownToggleHandler}
          />
        }
      </header>
      <div className={classes['top-image']}>
        <img src={topImage} alt='' />
      </div>
      <footer className={classes['bottom-image']}>
        <img src={bottomImage} alt='' />
      </footer>
    </Fragment>
  );  
};

export default Header; 