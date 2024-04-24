import { Helmet } from "react-helmet-async";

const CookiesPolicyPage = () => {
  return (
    <>
    <Helmet>
      <title>Cookies Policy - {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <div>CookiesPolicyPage</div>
    </>
  )
}

export default CookiesPolicyPage