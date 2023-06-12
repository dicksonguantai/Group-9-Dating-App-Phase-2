import React from "react";

const ProfileCard = ({ profile, handleDelete, handleEdit }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
      <p className="text-gray-600 mb-4">
        Age: {profile.age} | Gender: {profile.gender} | Location:{" "}
        {profile.location}
      </p>
      <p className="text-gray-800 mb-4">{profile.bio}</p>

      <div>
        <h4 className="text-lg font-bold mb-2">Interests</h4>
        <ul className="list-disc pl-6 mb-4">
          {Array.isArray(profile.interests) &&
            profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-2">Photos</h4>
        <div className="flex items-center mb-4">
          {Array.isArray(profile.photos) &&
            profile.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt=""
                className="w-16 h-16 rounded-full mr-4"
              />
            ))}
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        Height: {profile.height} cm | Education: {profile.education} | Job:{" "}
        {profile.job}
      </p>

      <p className="text-gray-600 mb-4">
        Ethnicity: {profile.ethnicity} | Religion: {profile.religion} | Body
        Type: {profile.bodyType}
      </p>

      <div>
        <h4 className="text-lg font-bold mb-2">Hobbies</h4>
        <ul className="list-disc pl-6 mb-4">
          {Array.isArray(profile.hobbies) &&
            profile.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-2">Music</h4>
        <ul className="list-disc pl-6 mb-4">
          {Array.isArray(profile.music) &&
            profile.music.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-2">Books</h4>
        <ul className="list-disc pl-6 mb-4">
          {Array.isArray(profile.books) &&
            profile.books.map((book, index) => <li key={index}>{book}</li>)}
        </ul>
      </div>

      <p className="text-gray-800 mb-4">
        Relationships: {profile.relationships}
      </p>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => handleEdit(profile.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(profile.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
