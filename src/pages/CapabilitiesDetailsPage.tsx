import { Helmet } from "react-helmet-async";

const CapabilitiesDetailsPage = () => {
  return (
    <>
    <Helmet>
      <title>Details - {process.env.REACT_APP_NAME}</title>
    </Helmet>
    <div>CapabilitiesDetailsPage</div>
    </>
  )
}

export default CapabilitiesDetailsPage