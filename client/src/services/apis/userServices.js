import api from "../../axios";


// Fetch all users
 export async function fetchUsers() {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // re-throw the error so it can be handled upstream
  }
}

// Add a user
export async function addUser(user) {
  try {
    const response = await api.post("/users", user);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error; // re-throw the error so it can be handled upstream
  }
}
