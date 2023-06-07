import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePics, setProfilePics] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Profile Picture: ", profilePic);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  const handleAddProfilePic = () => {
    if (profilePic) {
      setProfilePics((prevPics) => [...prevPics, profilePic]);
      setProfilePic(null);
    }
  };

  return (
    <div className="create-account">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="profile-pic">Profile Picture</label>
          <input
            type="file"
            id="profile-pic"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </div>
        <div className="profile-pics">
          {profilePics.map((pic, index) => (
            <img key={index} src={pic} alt={`Profile ${index + 1}`} />
          ))}
          {profilePic && <img src={profilePic} alt="New Profile" />}
        </div>
        <button type="button" onClick={handleAddProfilePic}>
          Add Profile Picture
        </button>
        <button type="submit">Create Account</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default CreateAccount;
