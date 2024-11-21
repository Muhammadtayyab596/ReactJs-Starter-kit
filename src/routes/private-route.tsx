import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Splash } from "../pages";
import { IUserContext, UserContext } from "../context/user-context";

interface IPrivateRoute {
  component: ReactNode;
  navLink: string;
}

const PrivateRoute = ({
  component: Component,
  navLink,
  ...rest
}: IPrivateRoute): ReactNode => {
  const { data } = useContext(UserContext) as IUserContext;

  if (data.user) {
    return Component ? (
      <Component {...rest} />
    ) : (
      <Navigate to={navLink} replace />
    );
  }
  if (data.isLoading) {
    return <Splash />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
