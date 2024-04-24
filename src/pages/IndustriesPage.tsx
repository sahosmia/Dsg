import { Helmet } from "react-helmet-async";
import bg from "../assets/banner/industry.png";
import bgHero from "../assets/hero/industry.png";
import {
  BottomBanner,
  HeroIndustry,
  IndustriesList,
} from "../resource/component";

const IndustriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Industries - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <HeroIndustry
        bg={bgHero}
        title="Industries We Serve"
        content=" We are dedicated to delivering measurable results and driving
                  growth and success for our clients across a wide range of
                  industries."
      />

      <section className="py-20">
        <div className="container">
          <IndustriesList />
        </div>
      </section>

      <BottomBanner
        bg={bg}
        title="Explore our Digital Capabilities"
        btnText="View Capabilities"
        url="/capabilities"
      />
    </>
  );
};

export default IndustriesPage;
