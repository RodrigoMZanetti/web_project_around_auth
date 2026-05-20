import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../../blocks/page.css";

function ProtectedRoute({ loggedIn, handleLogout }) {
  if (loggedIn) {
    return (
      <div className="page page__content">
        <Header handleLogout={handleLogout} />
        <Outlet />
        <Footer />
      </div>
    );
  }
  return <Navigate to={"/signin"} />;
}

export default ProtectedRoute;
