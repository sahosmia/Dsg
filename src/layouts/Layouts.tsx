import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet-async";

const Layouts = () => {
  return (
    <>
      <Helmet>
        <title>DSG</title>
        <meta name="description" content="Digital Transformation, Made Simple." />
      </Helmet>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
