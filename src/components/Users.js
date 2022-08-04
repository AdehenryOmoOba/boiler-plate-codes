import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/reducers/usersReducer";

function Users({ users, usersDispatch }) {
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

const mapStateToProps = (state) => {
  return { users: state.usersReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { usersDispatch: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
