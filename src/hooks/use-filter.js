import { useCallback } from 'react';

const useFilter = () => {
  const filterPets = useCallback((availablePets, filterOptions) => {
    let selectedPets = [...availablePets];

    if (filterOptions.species) {
      selectedPets = selectedPets.filter((pet) => (
        pet.species === filterOptions.species
      ));
    };

    if (filterOptions.size) {
      selectedPets = selectedPets.filter((pet) => (
        pet.size === filterOptions.size
      ));
    };

    if (filterOptions.hair) {
      selectedPets = selectedPets.filter((pet) => (
        pet.hair === filterOptions.hair
      ));
    };

    return selectedPets;
  }, []);

  return {
    filterPets,
  }
};

export default useFilter;