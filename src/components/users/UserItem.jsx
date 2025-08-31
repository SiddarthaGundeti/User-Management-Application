import { Link } from "react-router-dom";

const UserItem = ({ user, onDelete }) => (
  <div className="p-4 border rounded-lg shadow flex justify-between items-center">
    <div>
      <h2 className="font-semibold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
    <div className="flex gap-2">
      <Link
        to={`/edit-user/${user.id}`}
        className="bg-yellow-500 text-white px-3 py-1 rounded"
      >
        Edit
      </Link>
      <button
        onClick={() => onDelete(user.id)}
        className="bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  </div>
);

export default UserItem;
