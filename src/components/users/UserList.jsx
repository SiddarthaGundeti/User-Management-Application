import UserItem from "./UserItem";

const UserList = ({ users, onDelete }) => (
  <div className="grid gap-4">
    {users.map((user) => (
      <UserItem key={user.id} user={user} onDelete={onDelete} />
    ))}
  </div>
);

export default UserList;
