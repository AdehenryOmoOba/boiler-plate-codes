import React from "react";
import useFetchData from "../utilities/useFetchData";

function GetServerEmails() {
  const { data, isLoading, isError, error } = useFetchData(
    "emails",
    "http://localhost:4100/api/users"
  );

  return (
    <div>
      {isLoading && <h5>Loading...</h5>}
      {isError && <h5>{error.message}</h5>}
      {data?.map((email) => (
        <div key={email._id}>{email.email}</div>
      ))}
    </div>
  );
}

export default GetServerEmails;
