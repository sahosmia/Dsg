import { Helmet } from "react-helmet-async";
import {
  HeroIndustryCapability,
  OurFirmLeaderShip,
  SectionHeading,
  SectionParagraf,
} from "../resource/component";
import { useParams } from "react-router-dom";
import { getCapabilityItem } from "../util";
import { HelpImage } from "../resource/image";

const CapabilitiesDetailsPage = () => {
  const { solutionId } = useParams();
  const data = getCapabilityItem(solutionId);
  return (
    <>
      <Helmet>
        <title>Details - {process.env.REACT_APP_NAME}</title>
      </Helmet>


      <HeroIndustryCapability
        bg={data.banner}
        title={data.title}
        subtitle="Solutions"
        content="We are dedicated to delivering measurable results and driving
                  growth and success for our clients across a wide range of
                  industries."
      />

      <HelpSection />
      <OurFirmLeaderShip quantity={4}/>
    </>
  );
};

const HelpSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <SectionHeading>How we can help</SectionHeading>

            <SectionParagraf>
              We understand the importance of mobile app development for
              businesses looking to engage their customers and stay ahead of the
              competition. We offer comprehensive mobile app development
              services to help businesses develop user-friendly and engaging
              mobile applications that are optimized for both iOS and Android
              platforms. Our team of experienced developers is skilled in
              developing a wide range of mobile applications, from e-commerce
              and social networking apps to gaming and productivity apps.
            </SectionParagraf>
            <SectionParagraf>
              We take a holistic approach to mobile app development, working
              closely with our clients to understand their business objectives
              and target audience. Our team conducts extensive research and
              analysis to ensure that the app we develop is aligned with our
              clients' goals and meets the needs of their users. We also provide
              ongoing support and maintenance services to ensure that the app
              remains up-to-date and continues to meet our clients' evolving
              needs.
            </SectionParagraf>
          </div>
          <div className="col-lg-6 d-flex justify-content-center pb-4 pb-lg-0">
            <img src={HelpImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesDetailsPage;
