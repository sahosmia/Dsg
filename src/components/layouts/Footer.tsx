import { Link } from "react-router-dom"
import { WhiteLogo } from "../../resource/image"

const Footer = () => {
  return (
    <footer className="primary-deep-bg">
      <div className="py-20 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Link to="/">
              <img src={WhiteLogo} alt="Dsg" />
              </Link>
              <p className="py-4">We help organisations to design, build and scale mission critical IT solutions. </p>
            </div>
            <div className="col-12 col-md-3">
              <h5>Solutions</h5>
              <ul >
                <li><Link to="capabilities/1">Websites</Link></li>
                <li><Link to="capabilities/2">Mobile Applications</Link></li>
                <li><Link to="capabilities/3">Digital Marketing</Link></li>
                <li><Link to="capabilities/4">Artificial Intelligence</Link></li>
                <li><Link to="capabilities/5">Data Science & Analytics</Link></li>
                <li><Link to="capabilities">View All Solutions</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <h5>Company</h5>
              <ul >
                <li><Link to="#">Inside DSG</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container py-4 d-flex justify-content-center justify-content-md-between align-items-center">

          <p className="">© 2023 Digital Solutions Group </p>
          <div className="d-none d-md-flex gap-5">
            <Link to="privacy-policy">Privacy Policy</Link>
            <Link to="cookies-policy">Cookies Policy</Link>
          </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer