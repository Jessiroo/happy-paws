import { useState, useContext, useEffect, Fragment } from 'react';

import FilterContext from '../../context/filter-context';
import Button from "../Layout/Button";
import classes from './ToTopButton.module.css';

const ToTopButton = () => {
  const filterCtx = useContext(FilterContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollHandler = (event) => {
      if (window.scrollY > 500) {
        setShowButton(true);
        return;
      }
      setShowButton(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
   }, [])

  const backToTopHandler = () => {
    filterCtx.setScroll(0);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      {showButton && (
        <div className={classes.toTop}>
          <Button
            className='green'
            onClick={backToTopHandler}
          >
            &#8679; Back to Top
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default ToTopButton;