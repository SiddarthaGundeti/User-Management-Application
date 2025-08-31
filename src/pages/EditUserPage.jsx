import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api/userService";
import UserForm from "../components/users/UserForm";
import { useParams, useNavigate } from "react-router-dom";

const EditUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(id).then((res) => setUser(res.data));
  }, [id]);

  const handleUpdate = (updatedUser) => {
    updateUser(id, updatedUser).then(() => {
      alert("User updated successfully!");
      navigate("/");
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      {user && <UserForm onSubmit={handleUpdate} initialData={user} />}
    </div>
  );
};

export default EditUserPage;
