import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Dictionary from "./pages/dictionary";
import Word from "./pages/word";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/lugat",
      element: <Dictionary />,
    },
    {
      path: "/lugat/:word",
      element: <Word />,
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
