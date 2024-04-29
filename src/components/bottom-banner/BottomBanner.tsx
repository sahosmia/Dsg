import { Link } from "react-router-dom";
import "./bottom-banner.css";
import { BottomBannerType } from "../../types";
import { motion } from "framer-motion";
import { leftVariants } from "../../motion-variants";

const BottomBanner = ({ bg, title, btnText, url }: BottomBannerType) => {
  return (
    <section className="pb-20">
      <div className="container">
        <div
          className="bottom-banner"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            variants={leftVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3>{title}</h3>
            <Link to={url} className="header-contact-button">
              {btnText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
