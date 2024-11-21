import { ADMIN } from "../../pages";
import { Root } from "../../layouts";
import { Navigate } from "react-router-dom";

const ADMINRoutes = [
  {
    path: "",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    path: "dashboard",
    element: <Root />,
    children: [{ path: "", element: <ADMIN.ADMINDashboard /> }],
  },
  {
    path: "product-management",
    element: <Root />,
    children: [{ path: "", element: <ADMIN.ADMINProductManagement /> }],
  },
  {
    path: "package-management",
    element: <Root />,
    children: [
      { path: "package-plans", element: <ADMIN.ADMINPackagePlans /> },
      {
        path: "customer-subscription",
        element: <ADMIN.ADMINCustomerSubscriptions />,
      },
      {
        path: "notifications-and-alerts",
        element: <ADMIN.ADMINNotificationsAndAlerts />,
      },
    ],
  },
  {
    path: "order-management",
    element: <Root />,
    children: [{ path: "", element: <ADMIN.ADMINOrderManagement /> }],
  },
  {
    path: "customer-management",
    element: <Root />,
    children: [{ path: "", element: <ADMIN.ADMINCustomerManagement /> }],
  },
  {
    path: "dispatcher",
    element: <Root />,
    children: [{ path: "", element: <ADMIN.ADMINDispatcher /> }],
  },
];

export const RolesRoutes = {
  ADMIN: [...ADMINRoutes],
};
