import SectionHeadingContent from "../../tools/SectionHeadingContent";
import LeaderShipList from "../../Lists/LeaderShips/LeaderShipList";

const OurFirmLeaderShip = ({quantity} : {quantity:number}) => {
  return (
    <section data-aos="fade-up" className="pt-20">
      <div className="container">
        <SectionHeadingContent
          title="Our Leadership"
          content="We invest in ingenuity, empower collaboration, and bring together a focused breadth and depth of diverse talent to multiply our collective impact."
        />
        <LeaderShipList quantity={quantity}/>
      </div>
    </section>
  );
};

export default OurFirmLeaderShip;
