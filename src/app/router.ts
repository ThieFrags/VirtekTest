import {
  createBrowserRouter,
} from "react-router";
import {ERouterPath} from "@shared";
import HomePage from "@pages/home";

const router = createBrowserRouter([
  {
    path: ERouterPath.HOME,
    Component: HomePage,
  },
]);

export default router;