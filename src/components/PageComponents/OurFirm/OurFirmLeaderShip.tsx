import SectionHeadingContent from "../../tools/SectionHeadingContent";
import LeaderShipList from "../../Lists/LeaderShips/LeaderShipList";
import { motion } from "framer-motion";
import { downVariants } from "../../../motion-variants";

const OurFirmLeaderShip = ({ quantity }: { quantity: number }) => {
  return (
    <motion.section
      className="pt-20"
      variants={downVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container">
        <SectionHeadingContent
          title="Our Leadership"
          content="We invest in ingenuity, empower collaboration, and bring together a focused breadth and depth of diverse talent to multiply our collective impact."
        />
        <LeaderShipList quantity={quantity} />
      </div>
    </motion.section>
  );
};

export default OurFirmLeaderShip;
