import { useRouteError } from "react-router-dom";
import { Footer, } from "../resource/component";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <Helmet>
      <title>Error - {process.env.REACT_APP_NAME}</title>
    </Helmet>
      <div id="error-page" className="p-20">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
