import React, { useEffect, useState } from "react";
import axios from "axios";
import { UseEffectPracticeStyle } from "./use-effect-practice-styles.js";

const UseEffectComponent = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      
      setLoading(true);
      const response = await axios("https://jsonplaceholder.typicode.com/users");
      setDetails(response.data);
      
      setLoading(false);
    };
    fetchData();
  }, [name]);

  const filteredNames = details.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  return (
    <UseEffectPracticeStyle>
    <div className="container">
      <h1>Use Effect practice</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search name..."
        className="search-input"
      />
      {loading ? <h1 className="loading">Loading...</h1> : null}
      <ul className="user-list">
        {name && filteredNames.length === 0 && <p className="no-results">No matching names found</p>}
        {name && filteredNames.map(user => (
          <p key={user.id} onClick={() => setSelectedUser(user)} className="user-item">{user.name}</p>
        ))}
      </ul>
      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Website:</strong> {selectedUser.website}</p>
          <p><strong>Company:</strong> {selectedUser.company.name}</p>
          <p><strong>City:</strong> {selectedUser.address.city}</p>
        </div>
      )}
    </div>
    </UseEffectPracticeStyle>
  );
};
export default UseEffectComponent;
