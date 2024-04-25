import { Link } from "react-router-dom";
import "./bottom-banner.css"
import { BottomBannerType } from "../../types";

const BottomBanner = ({bg, title, btnText, url}:BottomBannerType) => {
  return (
    <section className="pb-20">
      <div className="container">
        <div
          className="bottom-banner"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3>{title}</h3>
          <Link to={url} className="header-contact-button">
            {btnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
