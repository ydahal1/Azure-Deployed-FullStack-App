import React from "react";

function UserCount({ users }) {
  return <div style={{ padding: "10px", display: "flex", justifyContent: "right" }}>Total users: {users.length}</div>;
}

export default UserCount;
