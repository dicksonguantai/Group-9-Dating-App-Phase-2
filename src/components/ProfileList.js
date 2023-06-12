import React from "react";

function ProfileList({ records, onDelete, onEdit }) {
  return (
    <div className="basis-2/3 bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Profiles</h2>
      {records.map((record) => (
        <div key={record.id} className="mb-4 p-4 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{record.name}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(record.id)}
                className="py-1 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(record.id)}
                className="py-1 px-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
          <p>{record.email}</p>
          <p>{record.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
