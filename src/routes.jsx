import { useRoutes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/loyiha-haqida",
      element: <About />,
    },
  ]);
};

export default Routes;
