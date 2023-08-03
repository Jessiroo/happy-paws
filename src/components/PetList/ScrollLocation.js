import { Fragment, useContext } from "react";

import FilterContext from "../../context/filter-context";

const ScrollLocation = () => {
  const { scrollPosition } = useContext(FilterContext); 

  window.scrollTo(null, scrollPosition);

  return <Fragment />;
};

export default ScrollLocation; 