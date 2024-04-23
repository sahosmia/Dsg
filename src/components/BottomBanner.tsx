import { Link } from "react-router-dom";

const BottomBanner = ({bg, title, btnText, url}) => {
  return (
    <section className="py-20">
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
