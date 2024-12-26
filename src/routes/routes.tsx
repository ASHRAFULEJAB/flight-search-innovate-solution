import App from "@/App";
import FlightResults from "@/components/search/FlightResult";
import Banner from "@/pages/Banner";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Banner />,
      },
      {
        path: "results",
        element: <FlightResults />,
      },
    ],
  },
]);

export default router;
