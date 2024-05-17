import React, { useState,  useEffect } from "react";
import UserCard from "./UserCard";
import { fetchUsers } from "../../services/apis/userServices";
import AddUser from "./AddUser";
import UserCount from "./UserCount";

// Style for card container
  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    border: '1px solid lightgray',
    marginTop: '10px'
  };



function UsersPage() {
  const [users, setUsers] = useState([]);

  // On load get users, use try catch
  useEffect(() => {
    async function getUsers() {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      <AddUser users = {users} setUsers={setUsers}/>
      <UserCount users={users} />
      {
      users.length > 0 && 
      <div style={cardContainer}>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
      }
    </div>
  );
}

export default UsersPage;
