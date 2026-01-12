import {createBrowserRouter,} from "react-router";
import {ERouterPath} from "@shared";
import HomePage from "@pages/home";
import MainLayout from "@app/layouts/main-layout";
import ServicesPage from "@pages/services";
import ProductPage from "@pages/products";
import ItemPage from "@pages/item";

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        element: <HomePage/>,
        path: ERouterPath.HOME
      },
      {
        element: <ServicesPage/>,
        path: ERouterPath.SERVICES,
      },
      {
        element: <ItemPage/>,
        path: `${ERouterPath.PRODUCT}/:id`
      },
      {
        element: <ProductPage/>,
        path: ERouterPath.SERVICES_ITEM
      },
      ]
  },
]);

export default router;