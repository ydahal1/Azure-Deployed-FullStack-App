import React, { useState } from "react";
import { addUser } from "../../services/apis/userServices";

const AddUser = ({setUsers }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(event) => {
    event.preventDefault();
    const user = { first_name: firstName, last_name: lastName, email: email };
    // use try catch
    try {
      await addUser(user);
      // unshift user to the users array
      setUsers((users) => [user, ...users]);
      setError("");

      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div style={{ border: "1px solid lightgray", padding: "10px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "right", flexDirection: "row" }}>
        <div style={{ width: "300px" }}>
          <input
            required
            style={{ width: "280px", height: "30px", border: "1px solid lightgray", padding: "5px" }}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={{ width: "300px" }}>
          <input
            required
            style={{ width: "280px", height: "30px", border: "1px solid lightgray", padding: "5px" }}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div style={{ width: "500px" }}>
          <input
            required
            style={{ width: "480px", height: "30px", border: "1px solid lightgray", padding: "5px" }}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" style={{ alignSelf: "flex-end", height: "42px", border: "1px solid lightgray", padding: "15px" }}>
          Submit
        </button>
      </form>
      {error &&
      <div style={{ display: "flex", justifyContent: "right", flexDirection: "row" }}> <p style={{ color: "red" }}>{error}</p></div>
      }
    </div>
  );
};

export default AddUser;
