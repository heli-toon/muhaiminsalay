import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { type ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  const adminEmail = "abdulkanton2005@gmail.com";

  return auth && auth.currentUser && auth.currentUser.email === adminEmail
    ? children
    : <Navigate to="/login" />;
};

export default PrivateRoute;
