import fetch from "./csrf";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const initialSessionState = { user: null };

const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const loginUserThunk = (userData) => async (dispatch) => {
  const data = { credential: userData.credential, password: userData.password };
  const res = await fetch("/api/session", {
    method: "post",
    body: JSON.stringify(data),
  });
  console.log("response right here", res);
  if (res.ok) {
    dispatch(setUser(res.data.user));
  }
  return res;
};

export const restoreUserThunk = () => async (dispatch) => {
  const res = await fetch("/api/session");
  dispatch(setUser(res.data.user));
  return res;
};

const sessionReducer = (state = initialSessionState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
