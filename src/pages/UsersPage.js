import { useEffect, useState } from "react";
import { getUsers } from "../services/API";
import UserCard from "../components/UserCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getUsers();
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
