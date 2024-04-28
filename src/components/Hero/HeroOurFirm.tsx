import HeroCard from "../tools/HeroCard/HeroCard";
import { motion, spring } from "framer-motion";

const HeroOurFirm = () => {
  return (
    <section className="our-firm-hero position-relative ">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, scale:.9  }}
              animate={{ opacity: 1, scale:1 }}
              transition={{type:spring, duration: 0.3, }}
            >
              <HeroCard
                title="Our Firm"
                content="We are dedicated to delivering measurable results and driving growth and success for our clients across a wide range of industries."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOurFirm;
