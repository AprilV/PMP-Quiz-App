import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode"; // Correct for jwt-decode version 4.x

const ProtectedRoute = ({ isAuthenticated, children }) => {
  console.log("🚀 ProtectedRoute is running...");
  console.log("🔍 isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    console.log("🚨 Not Authenticated! Redirecting to Login.");
    return <Navigate to="/login" replace />;
  }

  const token = localStorage.getItem("token");

  // Check if token exists before decoding
  if (!token) {
    console.log("🚨 No Token Found! Redirecting to Login.");
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwt_decode(token); // Use the correct function name
    const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds

    console.log("🔍 Decoded Token:", decodedToken);
    console.log("⏳ Expiration Time:", decodedToken.exp);
    console.log("⏳ Current Time:", currentTime);

    // ✅ If token is expired, remove it and redirect to login
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

  return children;
};

export default ProtectedRoute;
