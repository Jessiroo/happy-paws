import { useReducer } from 'react';

import FilterContext from './filter-context';

// DEFAULT STATE
const defaultFilterState = {
  species: undefined,
  size: undefined,
  hair: undefined,
  scrollPosition: 0,
};

// FILTER REDUCER 
const filterReducer = (state, action) => {
  // ACCEPT USER SELECTIONS
  if (action.type === 'SELECT') {
    const modifiedFilters = {defaultFilterState};
    if (action.filters.species) {
      modifiedFilters.species = action.filters.species;
    };
    if (action.filters.size) {
      modifiedFilters.size = action.filters.size;
    };
    if (action.filters.hair) {
      modifiedFilters.hair = action.filters.hair;
    };
    return modifiedFilters;
  };

  // REMOVE SINGLE PARAMETER
  if (action.type === 'REMOVE') {
    const modifiedFilters = {...state};
    if (action.param === 'species') {
      modifiedFilters.species = undefined;
    };
    if (action.param === 'size') {
      modifiedFilters.size = undefined;
    };
    if (action.param === 'hair') {
      modifiedFilters.hair = undefined;
    };
    modifiedFilters.scrollPosition = 0;
    return modifiedFilters;
  };

  // CLEAR FUNCTION
  if (action.type === 'CLEAR') {
    return defaultFilterState;
  };

  // SET SCROLL POSITION
  if (action.type === 'SCROLL') {
    const modifiedFilters = {...state};
    modifiedFilters.scrollPosition = action.offset;
    return modifiedFilters;
  };

  // DEFAULT
  return defaultFilterState;
};

// FILTER PROVIDER
const FilterProvider = (props) => {
  const [filterState, dispatchFilterAction] = useReducer(
    filterReducer,
    defaultFilterState,
  );

  const selectFiltersHandler = (filters) => {
    dispatchFilterAction({ type: 'SELECT', filters: filters });
  };

  const removeFilterHandler = (param) => {
    dispatchFilterAction({ type: 'REMOVE', param: param });
  };

  const clearFiltersHandler = () => {
    dispatchFilterAction({ type: 'CLEAR' });
  };

  const setScrollPositionHandler = (offset) => {
    dispatchFilterAction({ type: 'SCROLL', offset: offset });
  };

  const filterContext = {
    species: filterState.species,
    size: filterState.size,
    hair: filterState.hair,
    scrollPosition: filterState.scrollPosition,
    selectFilters: selectFiltersHandler,
    removeFilter: removeFilterHandler,
    clearFilters: clearFiltersHandler,
    setScroll: setScrollPositionHandler,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;