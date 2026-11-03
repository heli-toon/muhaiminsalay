import { Navigate } from "react-router-dom";
import { useAuth, isAdminEmail } from "../context/AuthContext";

import { type ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  return auth && auth.currentUser && isAdminEmail(auth.currentUser.email)
    ? children
    : <Navigate to="/login" />;
};

export default PrivateRoute;
