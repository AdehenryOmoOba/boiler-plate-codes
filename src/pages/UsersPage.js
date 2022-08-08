import React from "react";
import GetApiUsers from "../react-query/GetApiUsers";

function UsersPage() {
  return (
    <div>
      <h2>
        Users List <small style={{ fontSize: "1rem" }}>from API</small>
      </h2>
      <GetApiUsers />
    </div>
  );
}

export default UsersPage;
