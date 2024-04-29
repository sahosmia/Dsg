import { downVariants } from "../../../motion-variants";
import { ChildrenType } from "../../../types";
import { motion } from "framer-motion";

const SectionParagraf = ({ children }: ChildrenType) => {
  return (
    <motion.p
      className="section-paragraf"
      variants={downVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
};

export default SectionParagraf;
