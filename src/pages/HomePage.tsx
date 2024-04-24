import { useEffect, useState } from "react";
import {
  CapabilitesIndustries,
  Cta,
  HeroHome,
  IndustrieServeHome,
  SolutionsExploreHome,
} from "../resource/component";
import { Helmet } from "react-helmet-async";

const HomePage = () => {

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
   const time = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return clearTimeout(time)
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  
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
