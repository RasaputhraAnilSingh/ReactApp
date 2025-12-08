import React, { useState } from "react";

function UserCard({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    email: user.email,
    city: user.address?.city || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you can call your API to save changes if needed
    console.log("Saved user:", editedUser);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={editedUser.city}
            onChange={handleChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h3>{editedUser.name}</h3>
          <p>Email: {editedUser.email}</p>
          <p>City: {editedUser.city}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
}

export default UserCard;
