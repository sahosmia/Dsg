import { Helmet } from "react-helmet-async";
import HeroContact from "../components/Hero/HeroContact";

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title>Contact - {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <HeroContact/>
    <section className="py-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.1188517036776!2d-73.98720582345375!3d40.74739823809322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sbd!4v1714050470413!5m2!1sen!2sbd" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactPage