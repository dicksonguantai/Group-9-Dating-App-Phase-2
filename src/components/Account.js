import React, { useState, useEffect } from "react";
import axios from "axios";
//import InputForm from "./InputForm";
import ProfileCard from "./ProfileCard";

const Account = () => {
  const [value, setValue] = useState({
    name: "",
    age: "",
    gender: "",
    interests: "",
    location: "",
    bio: "",
    photos: [],
    height: "",
    education: "",
    job: "",
    ethnicity: "",
    religion: "",
    bodyType: "",
    hobbies: "",
    music: "",
    books: "",
    relationships: "",
    lookingFor: {
      ageRange: "",
      gender: "",
      location: "",
      occupation: "",
      diet: "",
    },
    messages: [],
  });
  const [editRecordId, setEditRecordId] = useState(null);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        "https://short-internal-elk.glitch.me/users"
      );
      setRecords(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name.startsWith("lookingFor.")) {
      const nestedField = e.target.name.split(".")[1];
      setValue({
        ...value,
        lookingFor: { ...value.lookingFor, [nestedField]: e.target.value },
      });
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editRecordId) {
        const updatedRecord = {
          ...value,
          profilePic: value.photos[0],
        };
        await axios.put(
          `https://short-internal-elk.glitch.me/users/${editRecordId}`,
          updatedRecord
        );
        setEditRecordId(null);
      } else {
        const newRecord = {
          ...value,
          profilePic: value.photos[0],
        };
        await axios.post(
          "https://short-internal-elk.glitch.me/users",
          newRecord
        );
      }

      setValue({
        name: "",
        age: "",
        gender: "",
        interests: "",
        location: "",
        bio: "",
        photos: [],
        height: "",
        education: "",
        job: "",
        ethnicity: "",
        religion: "",
        bodyType: "",
        hobbies: "",
        music: "",
        books: "",
        relationships: "",
        lookingFor: {
          ageRange: "",
          gender: "",
          location: "",
          occupation: "",
          diet: "",
        },
        messages: [],
      });

      fetchRecords();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://short-internal-elk.glitch.me/users/${id}`);
      setRecords(records.filter((record) => record.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id) => {
    const recordToEdit = records.find((record) => record.id === id);
    if (recordToEdit) {
      setValue({
        id: recordToEdit.id,
        name: recordToEdit.name,
        age: recordToEdit.age,
        gender: recordToEdit.gender,
        interests: Array.isArray(recordToEdit.interests)
          ? recordToEdit.interests.join(", ")
          : recordToEdit.interests,
        location: recordToEdit.location,
        bio: recordToEdit.bio,
        photos: Array.isArray(recordToEdit.photos)
          ? recordToEdit.photos.join(", ")
          : recordToEdit.photos,
        height: recordToEdit.height,
        education: recordToEdit.education,
        job: recordToEdit.job,
        ethnicity: recordToEdit.ethnicity,
        religion: recordToEdit.religion,
        bodyType: recordToEdit.bodyType,
        hobbies: Array.isArray(recordToEdit.hobbies)
          ? recordToEdit.hobbies.join(", ")
          : recordToEdit.hobbies,
        music: Array.isArray(recordToEdit.music)
          ? recordToEdit.music.join(", ")
          : recordToEdit.music,
        books: Array.isArray(recordToEdit.books)
          ? recordToEdit.books.join(", ")
          : recordToEdit.books,
        relationships: recordToEdit.relationships,
        lookingFor: {
          ...recordToEdit.lookingFor,
        },
      });
      setEditRecordId(id);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-2">
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2"
        />

        <input
          type="number"
          name="age"
          value={value.age}
          onChange={handleChange}
          placeholder="Age"
          className="border p-2"
        />

        <input
          type="text"
          name="gender"
          value={value.gender}
          onChange={handleChange}
          placeholder="Gender"
          className="border p-2"
        />

        <input
          type="text"
          name="interests"
          value={value.interests}
          onChange={handleChange}
          placeholder="Interests"
          className="border p-2"
        />

        <input
          type="text"
          name="location"
          value={value.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2"
        />

        <input
          type="text"
          name="bio"
          value={value.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="border p-2"
        />

        <input
          type="text"
          name="photos"
          value={value.photos}
          onChange={handleChange}
          placeholder="Photos"
          className="border p-2"
        />

        <input
          type="number"
          name="height"
          value={value.height}
          onChange={handleChange}
          placeholder="Height"
          className="border p-2"
        />

        <input
          type="text"
          name="education"
          value={value.education}
          onChange={handleChange}
          placeholder="Education"
          className="border p-2"
        />

        <input
          type="text"
          name="job"
          value={value.job}
          onChange={handleChange}
          placeholder="Job"
          className="border p-2"
        />

        <input
          type="text"
          name="ethnicity"
          value={value.ethnicity}
          onChange={handleChange}
          placeholder="Ethnicity"
          className="border p-2"
        />

        <input
          type="text"
          name="religion"
          value={value.religion}
          onChange={handleChange}
          placeholder="Religion"
          className="border p-2"
        />

        <input
          type="text"
          name="bodyType"
          value={value.bodyType}
          onChange={handleChange}
          placeholder="Body Type"
          className="border p-2"
        />

        <input
          type="text"
          name="hobbies"
          value={value.hobbies}
          onChange={handleChange}
          placeholder="Hobbies"
          className="border p-2"
        />

        <input
          type="text"
          name="music"
          value={value.music}
          onChange={handleChange}
          placeholder="Music"
          className="border p-2"
        />

        <input
          type="text"
          name="books"
          value={value.books}
          onChange={handleChange}
          placeholder="Books"
          className="border p-2"
        />

        <input
          type="text"
          name="relationships"
          value={value.relationships}
          onChange={handleChange}
          placeholder="Relationship Status"
          className="border p-2"
        />

        <input
          type="text"
          name="lookingFor.ageRange"
          value={value.lookingFor.ageRange}
          onChange={handleChange}
          placeholder="Looking For Age Range"
          className="border p-2"
        />

        <input
          type="text"
          name="lookingFor.gender"
          value={value.lookingFor.gender}
          onChange={handleChange}
          placeholder="Looking For Gender"
          className="border p-2"
        />

        <input
          type="text"
          name="lookingFor.location"
          value={value.lookingFor.location}
          onChange={handleChange}
          placeholder="Looking For Location"
          className="border p-2"
        />

        <input
          type="text"
          name="lookingFor.occupation"
          value={value.lookingFor.occupation}
          onChange={handleChange}
          placeholder="Looking For Occupation"
          className="border p-2"
        />

        <input
          type="text"
          name="lookingFor.diet"
          value={value.lookingFor.diet}
          onChange={handleChange}
          placeholder="Looking For Diet"
          className="border p-2"
        />

        <button
          type="submit"
          className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {records.map((record) => (
          <ProfileCard
            key={record.id}
            profile={record}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Account;
