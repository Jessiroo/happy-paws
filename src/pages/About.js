import { useState } from 'react';

import Card from '../components/Layout/Card';
import Button from '../components/Layout/Button';
import QuestionModal from '../components/AboutUs/QuestionModal';
import classes from './InfoAbout.module.css';

const AboutPage = () => {
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  // HANDLER FUNCTIONS
  const openQuestionModalHandler = () => {
    setShowQuestionModal(true);
  };
  const closeQuestionModalHandler = () => {
    setShowQuestionModal(false);
  };

  // COMPONENT RETURN
  return (
    <Card>
      <section className={classes.infoText}>
        {showQuestionModal && 
          <QuestionModal onClose={closeQuestionModalHandler}/>
        }
        <h1>About Us</h1>
        <p>We'd love to meet you, so feel free to call or come in for a visit. Walk-ins are welcome, or you can schedule an appointment to make sure you have the opportunity to meet our wonderful pets. </p>
        <h2>Contact Information & Business Address</h2>
          <div className={classes.contact}>
            <div>
              <div className={classes.contactGroup}>
                <p><b className={classes.slightBold}>Hours:</b></p> 
                <p>Daily from 11 AM to 5 PM</p>
              </div>
              <div className={classes.contactGroup}>
                <p><b className={classes.slightBold}>Address:</b></p>
                <p>123 Fake Street</p> 
                <p>City, State 12345</p>
              </div>
            </div>
            <div>
              <div className={classes.contactGroup}>
                <p><b className={classes.slightBold}>Phone:</b></p>
                <p>(000) 000-0000</p>
              </div>
              <div className={classes.contactGroup}>
                <p><b className={classes.slightBold}>Email:</b></p>
                <p>fakeemail@happypaws.org</p>
              </div>
            </div>
          </div>
        <div className={classes.contactButton}>
          <Button 
            className="white"
            onClick={openQuestionModalHandler}
          >Ask a Question</Button>
        </div>
        <h2>Get Involved</h2>
        <h3>Volunteering & Fostering</h3>
        <p>Animal care and adoptions are time and resource intensive, and we at Happy Paws are grateful to the volunteers who help to make our life-saving mission possible. Their donated time and care help to ensure that our animals receive the highest quality care. If you are interested in volunteering, we are always looking for individuals who share our mission and values. </p>
        <p>We also rely on foster homes which help to rehabilitate animals, particularly those coming from difficult situations and help prepare them for their forever homes.</p>
        <p>If you are interested in donating your time and care, please contact us to find out more!</p>
        <h3>Donations</h3>
        <p>Happy Paws is a non-profit organization, and our dedicated team of staff and volunteers works every day to help save lives and find new forever homes for the animals in our care, and the generous donations of people like you help to keep that dream alive. </p>
        <p>We are always looking for cash donations to purchase the essentials and upgrade our facilities. We also accept other donations such as lightly used toys or bedding, kitty litter, food, etc.</p>
        <p>If you would like to help contribute to our mission, please contact us!</p>
      </section>
    </Card>
  );
};

export default AboutPage;