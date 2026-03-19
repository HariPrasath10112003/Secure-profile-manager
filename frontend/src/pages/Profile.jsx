import { useState, useEffect } from "react";
import { getToken } from "../utils/auth";
import api from "../services/api";

function Profile() {
  const token = getToken();

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    contact: ""
  });

  const [editMode, setEditMode] = useState(false);

  //Fetch profile data
  useEffect(() => {
    api.get("/profile", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUser(res.data))
    .catch(err => console.log(err));
  }, []);

  //Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Update profile
  const handleUpdate = () => {
    api.put("/profile", user, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setUser(res.data);
      setEditMode(false);
      alert("Profile Updated ✅");
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Profile Page</h2>

      {!editMode ? (
        <>
          <p><strong>Name:</strong> {user.user?.name}</p>
          <p><strong>Email:</strong> {user.user?.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>DOB:</strong> {user.dob}</p>
          <p><strong>Contact:</strong> {user.contact}</p>

          <button className="btn btn-primary" onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
        </>
      ) : (
        <>
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="form-control mb-2"/>
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="form-control mb-2"/>
          <input name="age" value={user.age} onChange={handleChange} placeholder="Age" className="form-control mb-2"/>
          <input name="dob" value={user.dob} onChange={handleChange} placeholder="DOB" className="form-control mb-2"/>
          <input name="contact" value={user.contact} onChange={handleChange} placeholder="Contact" className="form-control mb-2"/>

          <button className="btn btn-success me-2" onClick={handleUpdate}>
            Save
          </button>

          <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;