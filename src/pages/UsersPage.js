import React from "react";
import Users from "../components/Users";

function UsersPage() {
  return (
    <div>
      <h2>
        Users List <small style={{ fontSize: "1rem" }}>from API</small>
      </h2>
      <Users />
    </div>
  );
}

export default UsersPage;
