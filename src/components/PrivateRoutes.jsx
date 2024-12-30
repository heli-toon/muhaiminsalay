// src/components/PrivateRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const adminEmail = "abdulkanton2005@gmail.com";

  return currentUser && currentUser.email === adminEmail ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
