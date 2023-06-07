import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import users from "../db";

const Profile = () => {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);
  }, [id]);

  const handleProfileClick = (user) => {
    console.log("Clicked more info:", user);

    setSelectedUser(user);
  };

  return (
    <section className="section">
      <div className="users">
        {users.map((user) => {
          return (
            <article key={user.id}>
              <h5>{user.name}</h5>
              <Link
                to={`/users/${user.id}`}
                onClick={() => handleProfileClick(user)}
              >
                more info
              </Link>
            </article>
          );
        })}
      </div>
      {selectedUser && (
        <div className="profile-card">
          <h2>{selectedUser.name}</h2>
          <p>Age: {selectedUser.age}</p>
          <p>Interests: {selectedUser.interests.join(", ")}</p>
          <p>Location: {selectedUser.location}</p>
          <p>Looking For:</p>
          <ul>
            <li>Age Range: {selectedUser.lookingFor.ageRange}</li>
            <li>Gender: {selectedUser.lookingFor.gender}</li>
            <li>Location: {selectedUser.lookingFor.location}</li>
            <li>Occupation: {selectedUser.lookingFor.occupation}</li>
            <li>Diet: {selectedUser.lookingFor.diet}</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Profile;
