import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute