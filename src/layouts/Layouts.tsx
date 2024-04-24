import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Aos from "aos";
import { Footer, Header } from "../resource/component";

const Layouts = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>DSG</title>
        <meta
          name="description"
          content="Digital Transformation, Made Simple."
        />
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
