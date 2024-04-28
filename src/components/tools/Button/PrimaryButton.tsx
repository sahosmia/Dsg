import { Link } from "react-router-dom";
import { ButtonType } from "../../../types";
import { motion } from "framer-motion";
const linkVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.3, type: "spring", bounce: 0.25 },
  },
};
const PrimaryButton = ({ children, url }: ButtonType) => {
  return (
    <motion.div
      variants={linkVariants}
      whileHover="hover" // Define the scale animation on hover
      whileTap="tap" // Define the scale animation on tap/click
    >
      <Link to={url} className="primary-button">
        {children}
      </Link>
    </motion.div>
  );
};

export default PrimaryButton;
