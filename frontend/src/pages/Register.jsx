import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(data);
      alert("Registered Successfully");
      navigate("/");
    } catch (err) {
      alert("Error");
    }
  };

  return (
   <div className="custom-container mt-5">
      <h2>Register</h2>
      <input className="form-control mb-2" placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })} />
      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })} />
      
      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;