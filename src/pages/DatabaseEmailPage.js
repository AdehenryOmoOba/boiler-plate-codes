import React from "react";
import DatabaseEmail from "../components/DatabaseEmail";

function DatabaseEmailPage() {
  return (
    <div>
      <h2>
        Emails <small style={{ fontSize: "1rem" }}>from Database</small>
      </h2>
      <DatabaseEmail />
    </div>
  );
}

export default DatabaseEmailPage;
