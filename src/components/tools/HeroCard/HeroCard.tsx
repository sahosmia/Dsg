import { HeroCardType } from "../../../types";
import heroCardStyle from "../HeroCard/HeroCard.module.css";
import { motion } from "framer-motion";

const HeroCard = ({ subtitle, title, content }: HeroCardType) => {
  return (
    <div className="col-sm-8 col-md-7 col-lg-5">
      <motion.div
        className={heroCardStyle.hero_card}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        {subtitle && <h6>{subtitle}</h6>}
        <h2>{title}</h2>
        {content && <p>{content}</p>}
      </motion.div>
    </div>
  );
};

export default HeroCard;
