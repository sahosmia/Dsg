import { Helmet } from "react-helmet-async";
import {
  CorporateResponsibility,
  Counter,
  Cta,
  HeroOurFirm,
  OurFirmLeaderShip,
} from "../resource/component";

import { leaderShips } from "../data/dummy";
import { motion } from "framer-motion";
import { downVariants } from "../motion-variants";



const OurFirmPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Firm - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <HeroOurFirm />
      <Counter />
      <OurFirmContent />
      <OurFirmQuite />
      <OurFirmLeaderShip quantity={leaderShips.length} />
      <CorporateResponsibility />
      <Cta title="Our Solutions" btnText="View Solutions" url="#" />
    </>
  );
};

const OurFirmContent = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.p
              className="pb-5 fw-medium font-18 ass-color"
              variants={downVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our mission is to harness the power of technology to drive growth
              and success for our clients. With a team of experienced
              professionals and a commitment to excellence, we deliver
              cutting-edge solutions that solve complex problems and improve
              efficiency across a range of industries.
            </motion.p>

            <motion.p
              className="pb-5 fw-medium font-18 ass-color"
              variants={downVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              At DSG, we offer a comprehensive suite of services, including web
              design and development, mobile application development, software
              development, digital marketing, and IT consulting. Our expertise
              in these areas enables us to provide tailored solutions that meet
              the specific needs of each client. We work closely with our
              clients to understand their objectives, and then leverage our
              technical expertise and industry experience to deliver exceptional
              results.
            </motion.p>

            <motion.p
              className=" fw-medium font-18 ass-color"
              variants={downVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Our approach is driven by a relentless focus on quality,
              innovation, and customer satisfaction. We are passionate about
              staying on the forefront of emerging technologies and trends, and
              are committed to delivering measurable business outcomes for our
              clients. At DSG, we believe that technology has the power to
              create positive change, and we are dedicated to making a
              difference through our work. We take pride in being a trusted
              partner in our clients' success, and look forward to the
              opportunity to help them achieve their goals.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurFirmQuite = () => {
  return (
    <motion.section
      variants={downVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="our-firm-quite">
          <div className="row">
            <div className=" col-lg-10 col-xl-7">
              <h4>
                Digital Solutions Group (DSG) is a leading technology-driven
                company that provides innovative digital solutions to businesses
                and individuals worldwide.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurFirmPage;
