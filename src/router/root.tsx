import { createBrowserRouter } from "react-router-dom";

import {
  ErrorPage,
  HomePage,
  OurFirmPage,
  IndustriesPage,
  IndustriesDetailsPage,
  CapabilitiesPage,
  CapabilitiesDetailsPage,
  ContactPage,
  PrivacyPolicyPage,
  CookiesPolicyPage,
} from "../resource/page";

import Layouts from "../layouts/Layouts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "our-firm",
        element: <OurFirmPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "industries/:industrieId",
        element: <IndustriesDetailsPage />,
      },
      {
        path: "capabilities",
        element: <CapabilitiesPage />,
      },
      {
        path: "capabilities/:solutionId",
        element: <CapabilitiesDetailsPage />,
      },
      {
        path: "cookies-policy",
        element: <CookiesPolicyPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
