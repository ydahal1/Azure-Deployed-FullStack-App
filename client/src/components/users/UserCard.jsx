import React from "react";

function UserCard({ user }) {
  //Card style
  const cardStyle = {
    border: "1px solid whitesmoke",
    padding: "10px",
    margin: "10px",
    width: "30%",
    overflow: "auto",
  };

  return (
    <div style={cardStyle}>
      <p> First Name : {user.first_name} </p>
      <p> Last Name : {user.last_name} </p>
      <p> Email : {user.email} </p>
    </div>
  );
}

export default UserCard;
