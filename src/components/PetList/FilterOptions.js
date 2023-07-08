import { Fragment, useContext } from 'react';

import FilterContext from '../../context/filter-context';
import classes from './FilterOptions.module.css';

const FilterOptions = () => {
  const filterCtx = useContext(FilterContext);

  const removeFilterOptionHandler = (key) => {
    filterCtx.removeFilter(key);
  };

  // DYNAMIC CONTENT
  let filterMsg = null;
  if (filterCtx.species || filterCtx.size || filterCtx.hair) {
    filterMsg = <span>Filter Options:</span>
  };

  let content = [];
  if (filterCtx.species) {
    content.push({key: 'species', text: filterCtx.species});
  };
  if (filterCtx.size) {
    content.push({key: 'size', text: filterCtx.size});
  };
  if (filterCtx.hair) {
    content.push({key: 'hair', text: filterCtx.hair});
  };

  const visibleFilters = (
    content.map((element) => {
      return (
        <span key={element.key}>
          <button onClick={removeFilterOptionHandler.bind(null, element.key)}>
            &times; {element.text}
          </button>
        </span>
      );
    })
  );

  // COMPONENT
  return(
    <Fragment>
      <div className={classes.filters}>
        {filterMsg}
        {visibleFilters}
      </div>
    </Fragment>
  );
};

export default FilterOptions;