
import bg from "../assets/banner/industry.png";
import bgHero from "../assets/hero/industry.png";
import { BottomBanner, Header, HeroIndustry, IndustriesList } from "../resource/component";

const IndustriesPage = () => {
  return (
    <>
      <Header />
      <HeroIndustry bg={bgHero} title="Industries We Serve" content=" We are dedicated to delivering measurable results and driving
                  growth and success for our clients across a wide range of
                  industries."/>

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
