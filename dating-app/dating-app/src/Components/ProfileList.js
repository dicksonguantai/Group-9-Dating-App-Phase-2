import React from "react";
import { Link } from "react-router-dom";
import users from "../db";

const ProfileList = () => {
  return (
    <div>
      <h2>Profile List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <li>Age Range: {user.age}</li>
          <li>Photo: {user.photos}</li>

          <Link to={`/users/${user.id}`}>more info</Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
