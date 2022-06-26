import { useContextUser } from "../context/UserProvider";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user, loading } = useContextUser();
  if (loading) return <h1> Loading </h1>;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
export default RequireAuth;
