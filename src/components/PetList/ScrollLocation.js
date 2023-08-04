import { useEffect } from "react";

import classes from './ScrollLocation.module.css';

const ScrollLocation = (props) => {

  useEffect(() => {
    console.log(props.scrollPosition, 'scroll')
    if (props.scrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo(0, props.scrollPosition);
      }, 500);
    };
  }, [props.scrollPosition]);

  return (
    <div className={classes.scrollDiv}>
      {props.children}
    </div>
  );
};

export default ScrollLocation; 