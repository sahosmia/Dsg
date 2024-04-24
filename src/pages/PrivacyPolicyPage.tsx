import { Helmet } from "react-helmet-async";

const PrivacyPolicyPage = () => {
  return (
    <>
    <Helmet>
      <title>Privacy Policy - {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <div>PrivacyPolicyPage</div>
    </>
  )
}

export default PrivacyPolicyPage