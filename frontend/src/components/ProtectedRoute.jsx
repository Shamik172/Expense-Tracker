import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../api/api";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    API.get("/auth/me")
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div>Loading...</div>;

  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
