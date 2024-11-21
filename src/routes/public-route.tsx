import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Splash } from "../pages";
import { IUserContext, UserContext } from "../context/user-context";
interface IPublicRoute {
  component: ReactNode;
}

const PublicRoute = ({
  component: Component,
  ...rest
}: IPublicRoute): ReactNode => {
  const { data } = useContext(UserContext) as IUserContext;

  if (data.isLoading) {
    return <Splash />;
  }

  if (data.user) {
    return <Navigate to={`/`} replace />;
  }

  return <Component {...rest} />;
};

export default PublicRoute;
