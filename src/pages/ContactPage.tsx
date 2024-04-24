import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
    <Helmet>
      <title>Contact - {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <div>ContactPage</div>
    </>
  )
}

export default ContactPage