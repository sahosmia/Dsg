import { Helmet } from "react-helmet-async";
import {
  CorporateResponsibility,
  Counter,
  Cta,
  Header,
  HeroOurFirm,
  OurFirmLiderShip,
} from "../resource/component";

const OurFirmPage = () => {
  return (
    <>
      
      <Helmet>
        <title>Our Firm - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Header />
      <HeroOurFirm />
      <Counter />
      <OurFirmContent />
      <OurFirmQuite />
      <OurFirmLiderShip />
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
            <p className="pb-5 fw-medium font-18 ass-color">
              Our mission is to harness the power of technology to drive growth
              and success for our clients. With a team of experienced
              professionals and a commitment to excellence, we deliver
              cutting-edge solutions that solve complex problems and improve
              efficiency across a range of industries.
            </p>

            <p className="pb-5 fw-medium font-18 ass-color">
              At DSG, we offer a comprehensive suite of services, including web
              design and development, mobile application development, software
              development, digital marketing, and IT consulting. Our expertise
              in these areas enables us to provide tailored solutions that meet
              the specific needs of each client. We work closely with our
              clients to understand their objectives, and then leverage our
              technical expertise and industry experience to deliver exceptional
              results.
            </p>

            <p className="fw-medium font-18 ass-color">
              Our approach is driven by a relentless focus on quality,
              innovation, and customer satisfaction. We are passionate about
              staying on the forefront of emerging technologies and trends, and
              are committed to delivering measurable business outcomes for our
              clients. At DSG, we believe that technology has the power to
              create positive change, and we are dedicated to making a
              difference through our work. We take pride in being a trusted
              partner in our clients' success, and look forward to the
              opportunity to help them achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurFirmQuite = () => {
  return (
    <section>
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
    </section>
  );
};

export default OurFirmPage;
