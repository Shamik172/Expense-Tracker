import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import { notify } from "./Notification";

const Navbar = ({ refreshAuth }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/auth/me")
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, [refreshAuth]);

  const logout = async () => {
    await API.post("/auth/logout");
    setLoggedIn(false);
    notify("Logged out successfully", "success");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4">
      <Link to="/" className="text-xl font-bold">
        Expense Tracker
      </Link>

      <div className="space-x-4">
        {loggedIn ? (
          <button
            onClick={logout}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="border px-4 py-2 rounded">
              Login
            </Link>
            <Link to="/register" className="border px-4 py-2 rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
