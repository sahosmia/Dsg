import bg from "../assets/banner/capability.png";
import bgHero from "../assets/hero/capability.png";
import {
  BottomBanner,
  CapabilityList,
  Header,
  HeroIndustry,
} from "../resource/component";
import { Helmet } from "react-helmet-async";


const CapabilitiesPage = () => {
  return (
    <>
    <Helmet>
      <title>Capabilities - {process.env.REACT_APP_NAME}</title>
    </Helmet>
      <Header />
      <HeroIndustry
        bg={bgHero}
        title="Our Capabilities"
        content=" We are dedicated to delivering measurable results and driving
                  growth and success for our clients across a wide range of
                  industries."
      />

      <section className="pt-20">
        <div className="container">
          <CapabilityList />
        </div>
      </section>

      <BottomBanner
        bg={bg}
        title="Explore our expertise across Industries"
        btnText="View Industries"
        url="/industries"
      />
    </>
  );
};

export default CapabilitiesPage;
