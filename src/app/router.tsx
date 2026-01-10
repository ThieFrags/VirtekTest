import {createBrowserRouter,} from "react-router";
import {ERouterPath} from "@shared";
import HomePage from "@pages/home";
import MainLayout from "@app/layouts/main-layout";

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        element: <HomePage/>,
        path: ERouterPath.HOME
      }]
  },
]);

export default router;