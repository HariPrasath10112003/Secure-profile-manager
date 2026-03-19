import { useState } from "react";
import { loginUser } from "../services/authService";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser(data);
      setToken(res.data);
      navigate("/profile");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="custom-container mt-5">
      <h2>Login</h2>
      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;