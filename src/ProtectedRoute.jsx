import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode"; 

const ProtectedRoute = ({ isAuthenticated, children }) => {
  console.log("🚀 ProtectedRoute is running...");
  console.log("🔍 isAuthenticated:", isAuthenticated);

  const token = localStorage.getItem("token");

  // 🔥 If there's no token, force logout immediately
  if (!token) {
    console.log("🚨 No Token Found! Redirecting to Login.");
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwt_decode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    console.log("🔍 Decoded Token:", decodedToken);
    console.log("⏳ Expiration Time:", decodedToken.exp);
    console.log("⏳ Current Time:", currentTime);

    // 🔥 If token is expired, remove it immediately and redirect
    if (decodedToken.exp < currentTime) {
      console.log("🚨 Token Expired! Logging out...");
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.log("🚨 Invalid Token! Redirecting to Login.");
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
