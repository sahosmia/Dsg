import { Link } from "react-router-dom";
import { CtaType } from "../../types";

const Cta = ({title, btnText, url}:CtaType) => {
  return (
    <section className="primary-bg py-4">
      <div className="container d-flex align-md-items-center justify-content-between flex-column flex-md-row">
        <h1 className="cta-title text-white pb-3 pb-md-0">{title}</h1>
        <Link to={url} className="header-contact-button">
          {btnText}
        </Link>
      </div>
    </section>
  );
};

export default Cta;
