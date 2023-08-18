import { useRoutes } from "react-router-dom";
import About from "./pages/about";
import Page from "./layout/page";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Page title={"Bosh sahifa - Tahrirlovchi"}>
          Hello World. It is home page!
        </Page>
      ),
    },
    {
      path: "/loyiha-haqida",
      element: <About />,
    },
  ]);
};

export default Routes;
