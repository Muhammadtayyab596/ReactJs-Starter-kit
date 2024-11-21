import { Navigate, useRoutes } from "react-router-dom";
import {
  // Errors
  NotFound,

  // Auth
  Login,
  ForgotPassword,
  SetNewPassword,
} from "../pages";
import { AuthLayout, LoggedinLayout } from "../layouts";
import PublicRoute from "./public-route";
import PrivateRoute from "../routes/private-route";
import { RolesRoutes } from "../roles/routes";
import { roles } from "../roles";
import { useContext } from "react";
import { IUserContext, UserContext } from "../context/user-context";

export default function Routes() {
  const { data } = useContext(UserContext) as IUserContext;

  const getPrivateRoleRoutes = () => {
    if (data?.user?.userRole === roles.ADMIN) {
      return [...RolesRoutes.ADMIN];
    }
    return [];
  };

  const Routes = [
    {
      path: "/",
      element: <PrivateRoute navLink="/" component={LoggedinLayout} />,
      children: getPrivateRoleRoutes(),
    },
    {
      path: "/login",
      element: <PublicRoute component={AuthLayout} />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "/forgot-password",
      element: <PublicRoute component={AuthLayout} />,
      children: [
        {
          path: "",
          element: <ForgotPassword />,
        },
      ],
    },
    {
      path: "/set-new-password",
      element: <PublicRoute component={AuthLayout} />,
      children: [
        {
          path: "",
          element: <SetNewPassword />,
        },
      ],
    },
    { path: "404", element: <NotFound /> },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ];

  return useRoutes([...Routes]);
}
