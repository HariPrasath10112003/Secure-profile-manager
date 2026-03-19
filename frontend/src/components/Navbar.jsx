import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link to="/" className="navbar-brand fw-bold">
        MyApp
      </Link>

      <div>
        <Link to="/register" className="btn btn-light me-2">
          Register
        </Link>

        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;