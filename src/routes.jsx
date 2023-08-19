import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/xizmatlar",
      element: <Services />,
    },
    {
      path: "/loyiha-haqida",
      element: <About />,
    },
  ]);
};

export default Routes;
