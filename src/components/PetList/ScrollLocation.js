import { useEffect, useContext } from "react";

import FilterContext from "../../context/filter-context";

const ScrollLocation = (props) => {
  const { scrollPosition } = useContext(FilterContext);

  useEffect(() => {
    if (scrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 500);
    };
    if (scrollPosition === 0) {
      window.scrollTo(0, 0);
    }
    
  }, [scrollPosition]);

  return (
    <div>
      {props.children}
    </div>
  );
};

export default ScrollLocation; 