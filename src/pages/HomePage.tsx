import {
  CapabilitesIndustries,
  Cta,
  Header,
  HeroHome,
  IndustrieServeHome,
  SolutionsExploreHome,
} from "../resource/component";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroHome />
      <CapabilitesIndustries />
      <SolutionsExploreHome />
      <IndustrieServeHome />
      <Cta title="Contact With Us" btnText="Contact" url="#" />
    </>
  );
};

export default HomePage;
