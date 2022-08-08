import React from "react";
import GetServerEmails from "../react-query/GetServerEmails";

function DatabaseEmailPage() {
  return (
    <div>
      <h2>
        Emails <small style={{ fontSize: "1rem" }}>from Database</small>
      </h2>
      <GetServerEmails />
    </div>
  );
}

export default DatabaseEmailPage;
