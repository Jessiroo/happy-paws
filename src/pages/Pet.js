import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import Card from '../components/Layout/Card';
import Button from '../components/Layout/Button';
import classes from './Pet.module.css';

const PetPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedPet, setSelectedPet] = useState();
  const { isLoading, error, sendRequest } = useHttp();

  // USEEFFECT
  useEffect(() => {
    const requestUrl  = 'https://pet-adoptions-jm01-default-rtdb.firebaseio.com/Pets/' + params.petId + '.json';

    const dataApplication = (responseData) => {
      setSelectedPet(responseData);
    };

    sendRequest({
      url: requestUrl,
    }, dataApplication);
  }, [params.petId, sendRequest]);

  // CLICK HANDLERS
  const returnToPetsHandler = () => {
    navigate('/pets');
  };
  const contactUsHandler = () => {
    navigate('/about');
  };

  // DYNAMIC CONTENT
  let content = <p className={classes.statusMsg}>No pet found.</p>;

  if (selectedPet) {
    content = (
      <main className={classes.pet}>
        <img src={selectedPet.url} alt="Pet" />
        <h1>{selectedPet.name}</h1>
        <div className={classes.stats}>
          <p><b>Size:</b> {selectedPet.size}</p>
          <p><b>Hair:</b> {selectedPet.hair}</p>
          <p><b>Age:</b> {selectedPet.age}</p>
          <p><b>Sex:</b> {selectedPet.sex}</p>
        </div>
        <div className={classes.text}>
          <p>{selectedPet.text}</p>
        </div>
        <div className={classes.buttons}>
          <Button
            className="white"
            onClick={returnToPetsHandler}
          >Back to Pets</Button>
          <Button
            className="green"
            onClick={contactUsHandler}
          >Contact Us</Button>
        </div>
      </main>
    );
  };

  if (isLoading) {
    content = <p className={classes.statusMsg}>Loading...</p>;
  };
  if (error) {
    content = <p className={classes.statusMsg}>{error}</p>;
  };


  // COMPONENT RETURN
  return (
    <Card>
      {content}
      {!selectedPet && (
        <div className={classes.buttons}>
          <Button 
            className="white"
            onClick={returnToPetsHandler}
          >Back to Pets</Button>
        </div>
      )}
    </Card>
  );
};

export default PetPage;