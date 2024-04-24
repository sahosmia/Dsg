import {
  CapabilitesIndustries,
  Cta,
  HeroHome,
  IndustrieServeHome,
  SolutionsExploreHome,
} from "../resource/component";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
    <Helmet>

    <title>Home - {process.env.REACT_APP_NAME}</title>
    </Helmet>
      <HeroHome />
      <CapabilitesIndustries />
      <SolutionsExploreHome />
      <IndustrieServeHome />
      <Cta title="Contact With Us" btnText="Contact" url="#" />
    </>
  );
};

export default HomePage;
