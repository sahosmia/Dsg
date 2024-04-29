import { downVariants } from "../../../motion-variants";
import { SectionHeadingType } from "../../../types";
import { motion } from "framer-motion";

const SectionHeading = ({ children, isWhite = false }: SectionHeadingType) => {
  return (
    <motion.h1
      className={`section-heading ${isWhite ? "text-white" : ""}`}
      variants={downVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.h1>
  );
};

export default SectionHeading;
