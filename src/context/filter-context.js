import React from 'react';

const FilterContext = React.createContext({
  species: undefined,
  size: undefined,
  hair: undefined,
  scrollPosition: 0,
  selectFilters: (filters) => {},
  removeFilter: (param) => {},
  clearFilters: () => {},
  setScroll: (offset) => {},
});

export default FilterContext;