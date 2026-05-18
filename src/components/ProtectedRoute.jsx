import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ loggedIn }) {
  if (loggedIn) {
    return <Outlet />;
  }
  return <Navigate to={"/signin"} />;
}

export default ProtectedRoute;
