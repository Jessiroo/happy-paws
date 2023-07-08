import Card from '../components/Layout/Card';
import classes from './InfoAbout.module.css';

const InfoPage = () => {
  return (
    <Card>
      <section className={classes.infoText}>
        <h1>Adoption Information</h1>
        <p>Adopting a pet is like adding a new member to the family, and it is important for the happiness and well-being of both people and pets alike to ensure that the lifestyles and needs of both are taken into consideration when choosing your new friend. Some pets may have additional exercise or care requirements, or need for additional ongoing training. They may also be more or less suitable to homes with children or other pets. All of these things are important to keep in mind.</p>
        <h2>Fees</h2>
        <p>Please note these are general fees for adoptions but that there may be some deviation based in the individual animal in question. If you have further questions, please contact us!</p>
        <ul className={classes.list}>
          <li><b className={classes.slightBold}>Adult Cats</b> - $40</li>
          <li><b className={classes.slightBold}>Adult Dogs</b>  - $150</li>
          <li><b className={classes.slightBold}>Kittens</b> - $100 (under 1 year)</li>
          <li><b className={classes.slightBold}>Puppies</b> – $375 (under 6 months), $250 (6 months to 1 year)</li>
          <li><b className={classes.slightBold}>Senior Dogs/Cats</b> - $25 (over 7 years), Free for seniors</li>
          <li><b className={classes.slightBold}>Exotics</b> – Variable</li>
        </ul>
        <h2>Spaying/Neutering & Vaccinations</h2>
        <p>All animals up for adoption are fully up to date on their vaccination schedule for their age group, all animals (with the exception of some exotics) have also been spayed/neutered if they are of an appropriate age. For animals too young to be spayed/neutered, adoption fees include a voucher for the procedure redeemable at several participating veterinary clinics. Each animal will come with a full record of their vaccinations and veterinary health.</p>
        <h2>Visiting & Trial Periods</h2>
        <p>We highly recommend coming in to meet the animals, visits can be walk-ins during our regular business hours, or if you want to make sure you have time to spend with a specific animal, you can call us to schedule an appointment. </p>
        <p>At-home trials can also be arranged for up to a week to see if a pet is a good match for you and your family. Please contact us for further information and scheduling.</p>
        <h2>Home Inspection</h2>
        <p>Here at Happy Paws we are committed to the well-being of the animals in our care, so before an at-home trial or adoption can be approved we require a home inspection by one of our staff members. This is intended to ensure that the animal has a safe home they are going to, where their needs will be met. This is also an opportunity for us to help you identify pet safety issues you may not have been aware of and make suggestions for improvements. We <i>want</i> to help make this a reality for both you and your new pet. </p>
      </section>
    </Card>
  );
};

export default InfoPage;