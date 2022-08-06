import React, { useEffect } from "react";
import { fetchEmails } from "../redux/slices/databaseEmailSlice";
import { useDispatch, useSelector } from "react-redux";

function DatabaseEmail() {
  const emailDispatch = useDispatch();
  const emails = useSelector((state) => state.databaseEmailSlice);

  useEffect(() => {
    emailDispatch(fetchEmails());
  }, [emailDispatch]);

  console.log(emails);

  return (
    <div>
      {emails.loading && <h5>Loading...</h5>}
      {emails.error && <h5>{emails.error}</h5>}
      {emails.data &&
        emails.data?.map((email) => <div key={email._id}>{email.email}</div>)}
    </div>
  );
}

export default DatabaseEmail;
