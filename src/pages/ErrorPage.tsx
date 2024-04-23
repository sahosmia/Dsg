import { useRouteError } from "react-router-dom";
import { Footer, Header } from "../resource/component";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
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
