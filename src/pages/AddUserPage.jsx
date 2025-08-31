import { createUser } from "../api/userService";
import UserForm from "../components/users/UserForm";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();

  const handleAddUser = (user) => {
    createUser(user).then((res) => {
      alert("User added successfully!");
      navigate("/");
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add New User</h2>
      <UserForm onSubmit={handleAddUser} />
    </div>
  );
};

export default AddUserPage;
