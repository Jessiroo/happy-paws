import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from './FeaturedPets.module.css';

const FeaturedPets = (props) => {
  const [activePets, setActivePets] = useState(props.featuredPets);
  const [delayScroll, setDelayScroll] = useState(false);
  const navigate = useNavigate();

  // EVENT HANDLERS
  const advanceFeaturedPets = () => {
    const oldActivePets = [...activePets];
    const newActivePets = [].concat(oldActivePets.slice(1), oldActivePets.slice(0, 1));
    setActivePets(newActivePets);
    setDelayScroll(true);
  };

  const regressFeaturedPets = () => {
    const oldActivePets = [...activePets];
    const numActivePets = oldActivePets.length;
    const newActivePets = [].concat(oldActivePets.slice(numActivePets - 1), oldActivePets.slice(0, numActivePets - 1));
    setActivePets(newActivePets);
    setDelayScroll(true);
  };

  const navigateFeaturedPet = (pet) => {
    const petId = activePets[pet].id;
    navigate('/pets/' + petId);
  };

  // SWIPE FUNCTIONALITY
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (event) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event) => setTouchEnd(event.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const leftSwipe = distance > 50;
    const rightSwipe = distance < -50;
    if (leftSwipe) {
      advanceFeaturedPets();
    };
    if (rightSwipe) {
      regressFeaturedPets();
    };
  };

  // SCROLL USEEFFECT
  useEffect(() => {
    if (delayScroll) {
      return;
    }

    const interval = setInterval(() => {
      const oldActivePets = [...activePets];
      const newActivePets = [].concat(oldActivePets.slice(1), oldActivePets.slice(0, 1));
      setActivePets(newActivePets);
    }, 7000);

    return () => {
      if (interval) {
        clearInterval(interval);
      };
    };
  }, [activePets, delayScroll]);

  // DELAYSCROLL USEEFFECT 
  useEffect(() => {
    if(delayScroll) {
      const timeout = setTimeout(() => {
        setDelayScroll(false);
      }, 8000);

      return () => {
        if (timeout) {
          clearTimeout(timeout);
        };
      };
    };
  }, [delayScroll])

  // COMPONENT RETURN STATEMENT
  return (
    <section 
      className={classes.featuredPets}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button 
        className={classes.scrollButton}
        onClick={regressFeaturedPets}
      >&#706;</button>
      <div className={classes.preLoad}>
        <img 
          src={activePets[0].url}
          alt=""
        />
      </div>
      <div className={classes.flank}>
        <img 
          src={activePets[1].url}
          alt="a featured pet"
          onClick={navigateFeaturedPet.bind(null, 1)}
        />
      </div>
      <div className={classes.main}>
        <img 
          src={activePets[2].url}
          alt="featured pet"
          onClick={navigateFeaturedPet.bind(null, 2)}
        />
      </div>
      <div className={classes.flank}>
        <img 
          src={activePets[3].url}
          alt="a featured pet"
          onClick={navigateFeaturedPet.bind(null, 3)}
        />
      </div>
      <div className={classes.preLoad}>
        <img 
          src={activePets[4].url}
          alt=""
        />
      </div>
      <button 
        className={classes.scrollButton}
        onClick={advanceFeaturedPets}
      >&#707;</button>
    </section>
  );
};

export default FeaturedPets;