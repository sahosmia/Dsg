import { leftVariants } from "../../motion-variants";
import { HeroIndustryType } from "../../types";
import { motion } from "framer-motion";

const HeroIndustry = ({ bg, title, content }: HeroIndustryType) => {
  return (
    <section className=" position-relative ">
      <div
        className="z--1"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="overlay-simple">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-lg-9 hero-industry"
                variants={leftVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h1 className="hero-small-heading text-center text-lg-start">
                  {title}
                </h1>

                <p className="hero-p text-center text-lg-start">{content}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
