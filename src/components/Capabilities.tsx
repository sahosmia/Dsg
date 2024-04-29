import SectionHeading from "./tools/Heading/SectionHeading";
import SectionParagraf from "./tools/Paragraf/SectionParagraf";
import CapabilitiesImage from "../assets/capabilites.png";
import PrimaryButton from "./tools/Button/PrimaryButton";
import { motion } from "framer-motion";
import {  leftVariants, rightVariants } from "../motion-variants";

const Capabilities = () => {
  return (
    <div className="row align-items-center pb-20 flex-column-reverse flex-lg-row gap-5">
     
     <div className="col-lg-5">

      <motion.div
        variants={leftVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading>Our Digital Capabilities </SectionHeading>
        <SectionParagraf>
          We understand the unique needs and challenges faced by organisations
          in today's fast-paced digital world. That's why we offer a wide range
          of capabilities designed to help corporations achieve their goals and
          stay ahead of the competition. Our team of experts has the knowledge
          and expertise to deliver the results your business needs to succeed.
        </SectionParagraf>
        <PrimaryButton url="#">Browse by Capabilities</PrimaryButton>
      </motion.div>
        </div> 
      <div className=" col-lg-6  ms-md-auto ">
        <motion.div
        variants={rightVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >

        <img className="w-100" src={CapabilitiesImage} alt="capabilites" />
      </motion.div>
      </div>
    </div>
  );
};

export default Capabilities;
