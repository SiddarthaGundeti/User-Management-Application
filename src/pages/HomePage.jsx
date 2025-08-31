import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/userService";
import UserList from "../components/users/UserList";
import Spinner from "../components/common/Spinner";
import ErrorMessage from "../components/common/ErrorMessage";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users. Please try again.");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter((u) => u.id !== id)))
      .catch(() => setError("Failed to delete user."));
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">User Management</h1>
        <Link
          to="/add-user"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add User
        </Link>
      </div>
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
