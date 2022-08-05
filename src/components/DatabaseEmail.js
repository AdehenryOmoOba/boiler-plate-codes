import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmails } from "../redux/reducers/databaseEmailReducer";

function DatabaseEmail({ emails, emailDispatch }) {
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

const mapStateToProps = (state) => {
  return { emails: state.emailReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { emailDispatch: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseEmail);
