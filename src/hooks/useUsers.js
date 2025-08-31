import { useState, useEffect } from "react";
import { getUsers } from "../api/userService";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return { users, setUsers, loading };
};

export default useUsers;
