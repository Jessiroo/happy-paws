import { useState, useEffect } from 'react';

import FeaturedPets from '../components/FeaturedPets/FeaturedPets';
import Card from '../components/Layout/Card';
import useHttp from '../hooks/use-http';
import classes from './Home.module.css';

const HomePage = () => {
  const [featuredPets, setFeaturedPets] = useState();
  const { isLoading, error, sendRequest } = useHttp();

  // RETRIEVE FEATURED PETS
  useEffect(() => {
    const retrievedPets = [];

    const dataApplication = (responseData) => {
      for (const key in responseData) {
        retrievedPets.push({
          id: key,
          url: responseData[key].url,
        });
      };
  
      setFeaturedPets(retrievedPets);
    };
  
    sendRequest({
      url: 'https://pet-adoptions-jm01-default-rtdb.firebaseio.com/FeaturedPets.json',
    }, dataApplication);
  
  }, [sendRequest]);

  // FEATURED PET CONTENT
  let featuredPetContent = <p className={classes.statusMsg}>No pets found.</p>;

  if (featuredPets) {
    featuredPetContent = (
      <FeaturedPets
        featuredPets={featuredPets}
      />
    );
  };

  if (error) {
    featuredPetContent = <p className={classes.statusMsg}>Unable to retrieve featured pets.</p>;
  };

  if (isLoading) {
    featuredPetContent = <p className={classes.statusMsg}>Loading...</p>;
  };

  // COMPONENT RETURN
  return (
    <Card>
      <div  className={classes.welcome}>
        <h1>Welcome to Happy Paws</h1>
      </div>
      {featuredPetContent}
      <section className={classes.text}>
        <h2>Our Mission</h2>
        <p>Here at Happy Paws we are committed to treating animals with the dignity and respect they deserve, and matching them with forever homes. Whether by adopting, donating, volunteering, fostering, or simply by practicing responsible pet ownership, we all have the power to make a difference in the lives of animals around us. Join us, and help save lives today!</p>
      </section>
    </Card>
  );
};

export default HomePage;