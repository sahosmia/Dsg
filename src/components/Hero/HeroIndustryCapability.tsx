import { Link } from "react-router-dom";
import HeroCard from "../tools/HeroCard/HeroCard";

const HeroIndustryCapability = ({ title, content, bg }) => {
  return (
    <section className=" position-relative ">
      <div
        className="hero-industry-capability"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="">
          <div className="container-fluid">
           <div className="row">
              <div className="col-sm-8 col-md-6 col-lg-6 breadcump">
                <ul>
                  <li>
                    <Link to="/">Home / </Link>
                  </li>
                  <li>
                    <Link to="/industries">INDUSTRIES / </Link>
                  </li>
                  <li>
                    <Link to="">Technology, Media & Telecommunications</Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          <div className="container">
           

            <div className="row py-20">
              <HeroCard subtitle="Industries" title={title}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustryCapability;
