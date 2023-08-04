import { useState, useEffect, useContext, Fragment } from 'react';

import FilterContext from '../context/filter-context';
import useHttp from '../hooks/use-http';
import useFilter from '../hooks/use-filter';
import Card from '../components/Layout/Card';
import SelectFilters from '../components/PetList/SelectFilters';
import FilterOptions from '../components/PetList/FilterOptions';
import PetListItem from '../components/PetList/PetListItem';
import classes from './PetList.module.css';
import ToTopButton from '../components/PetList/ToTopButton';
import ScrollLocation from '../components/PetList/ScrollLocation';

// PAGE COMPONENT FUNCTION
const PetListPage = () => {
  const [availablePets, setAvailablePets] = useState([]);
  const [filterSelectorOpen, setFilterSelectorOpen] = useState(false);
  const filterCtx = useContext(FilterContext);
  const { isLoading, error, sendRequest } = useHttp();
  const { filterPets } = useFilter();

  // DATA FETCHING USEEFFECT
  useEffect(() => {
    const dataApplication = (responseData) => {
      const loadedPets = [];

      for (const key in responseData) {
        // PLACEHOLDER - don't need all these fields here?
        loadedPets.push({
          id: key,
          key: key,
          name: responseData[key].name,
          url: responseData[key].url,
          thumbnail: responseData[key].thumbnail,
          species: responseData[key].species,
          age: responseData[key].age,
          hair: responseData[key].hair ? responseData[key].hair : 'N/A',
          size: responseData[key].size ? responseData[key].size : 'N/A',
          text: responseData[key].text,
        });
      };

      setAvailablePets(loadedPets);
    };

    sendRequest({
      url: 'https://pet-adoptions-jm01-default-rtdb.firebaseio.com/Pets.json',
    }, dataApplication);
  }, [sendRequest]);
  
  // ONCLICK HANDLERS
  const openFilterSelectorHandler = () => {
    setFilterSelectorOpen(true);
  };
  const closeFilterSelectorHandler = () => {
    setFilterSelectorOpen(false);
  };

  // FILTERING
  const filterOptions = {
    species: filterCtx.species,
    size: filterCtx.size,
    hair: filterCtx.hair,
  };

  const filteredPets = filterPets(availablePets, filterOptions);

  // CONTENT
  let content = <p className={classes.statusMsg}>No pets found.</p>;

  if (filteredPets.length > 0) {
    content = filteredPets.map((pet) => (
        <PetListItem 
          name={pet.name}
          id={pet.id}
          key={pet.id}
          thumbnail={pet.thumbnail}
          text={pet.text}
        />
      ));
  };
  if (error) {
    content = <p className={classes.statusMsg}>{error}</p>;
  };
  if (isLoading) {
    content = <p className={classes.statusMsg}>Loading...</p>;
  };

  // PAGE
  return (
    <Fragment>
      <ScrollLocation scrollPosition={filterCtx.scrollPosition}>
      <Card>
        <h1>Find a Pet:</h1>
        {filterSelectorOpen && 
          <SelectFilters onClose={closeFilterSelectorHandler} />
        }
        <div className={classes.filters}>
            <FilterOptions />
            <button 
              className={classes['filter-button']}
              onClick={openFilterSelectorHandler}
            >&#x25BC; Filter</button>
        </div>
        <ul>
          {content}
        </ul>
      </Card>
      <ToTopButton />
      </ScrollLocation>
    </Fragment>
  );
};

export default PetListPage;