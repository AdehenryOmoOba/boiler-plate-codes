import React from "react";
import useFetchData from "../utilities/useFetchData";

function GetApiUsers() {
  const { data, isLoading, isError, error } = useFetchData(
    "users",
    "https://reqres.in/api/users?page=",
    2
  );

  return (
    <div>
      <div>
        {isLoading && <h5>Loading...</h5>}
        {isError && <h5>{error.message}</h5>}
        {data &&
          data.data?.map((user) => <div key={user.id}>{user.first_name}</div>)}
      </div>
    </div>
  );
}

export default GetApiUsers;
