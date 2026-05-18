import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ loggedIn }) {
  if (loggedIn) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
  return <Navigate to={"/signin"} />;
}

export default ProtectedRoute;
