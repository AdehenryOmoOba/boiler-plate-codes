import axios from "axios";

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUEST };
};

export const fetchUsersSuccess = (data) => {
  return { type: FETCH_USERS_SUCCESS, payload: data };
};

export const fetchUsersFailure = (errorMsg) => {
  return { type: FETCH_USERS_FAILURE, payload: errorMsg };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

const initialState = { loading: false, data: [], error: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
