import "./hero-home.css";
import { motion } from "framer-motion";

const HeroHome = () => {
  const title = "Digital transformation, made simple.";

  const titleArray = title.split("");
  console.log(titleArray);

  return (
    <section className="home-hero overly-test">
      <div className="container">
        <div className="row">
          <div className=" col-lg-9 home-hero-content">
            <h1 className="hero-heading text-center text-lg-start">
              {titleArray.map((t, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index / 30 }}
                >
                  {t}
                </motion.span>
              ))}
            </h1>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
