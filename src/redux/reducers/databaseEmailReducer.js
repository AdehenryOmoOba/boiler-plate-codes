import axios from "axios";

const FETCH_EMAIL_REQUEST = "FETCH_EMAIL_REQUEST";
const FETCH_EMAIL_SUCCESS = "FETCH_EMAIL_SUCCESS";
const FETCH_EMAIL_FAILURE = "FETCH_EMAIL_FAILURE";

export const fetchEmailRequest = () => {
  return { type: FETCH_EMAIL_REQUEST };
};

export const fetchEmailSuccess = (data) => {
  return { type: FETCH_EMAIL_SUCCESS, payload: data };
};

export const fetchEmailFailure = (errorMsg) => {
  return { type: FETCH_EMAIL_FAILURE, payload: errorMsg };
};

export const fetchEmails = () => {
  return async (dispatch) => {
    dispatch(fetchEmailRequest());
    try {
      const { data } = await axios.get("http://localhost:4100/api/users");
      dispatch(fetchEmailSuccess(data));
    } catch (error) {
      dispatch(fetchEmailFailure(error.message));
    }
  };
};

const initialState = { loading: false, data: [], error: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAIL_REQUEST:
      return { ...state, loading: true };
    case FETCH_EMAIL_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_EMAIL_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
