import React, { useEffect } from "react";
import { fetchUsers } from "../redux/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const usersDispatch = useDispatch();
  const users = useSelector((state) => state.usersSlice);

  useEffect(() => {
    usersDispatch(fetchUsers());
  }, [usersDispatch]);

  return (
    <div>
      {users.loading && <h5>Loading...</h5>}
      {users.error && <h5>{users.error}</h5>}
      {users.data &&
        users.data.data?.map((user) => (
          <div key={user.id}>{user.first_name}</div>
        ))}
    </div>
  );
}

export default Users;
