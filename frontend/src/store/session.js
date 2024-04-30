import { createSelector } from 'reselect';
import jwtFetch from './jwt';

const RECEIVE_CURRENT_USER = "session/RECEIVE_CURRENT_USER";
const RECEIVE_SESSION_ERRORS = "session/RECEIVE_SESSION_ERRORS";
const CLEAR_SESSION_ERRORS = "session/CLEAR_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "session/RECEIVE_USER_LOGOUT";

// Dispatch receiveCurrentUser when a user logs in.
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// Dispatch receiveErrors to show authentication errors on the frontend.
const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// Dispatch logoutUser to clear the session user when a user logs out.
const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

// Dispatch clearSessionErrors to clear any session errors.
export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});



export const signup = user => startSession(user, '/api/users/register');
export const login = user => startSession(user, '/api/users/login');

export const startSession = (userInfo, route) => async dispatch => {
  const { image, username, password, email } = userInfo;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("email", email);

  if (image) formData.append("image", image);

  // try {
  //   const res = await jwtFetch(route, {
  //     method: "POST",
  //     body: formData
  //     // body: JSON.stringify(userInfo)
  //   });
  //   const { user, token } = await res.json();
  //   localStorage.setItem('jwtToken', token);
  //   return dispatch(receiveCurrentUser(user));
  // } catch(err) {
  //   const res = await err.json();
  //   if (res.statusCode === 400) {
  //     dispatch(receiveErrors(res.errors));
  //     return res.errors;
  //   }
  // }
  return jwtFetch(route, {
    method: "POST",
    body: formData
  })
    .then(res => {
      if(res.ok){
          return res.json();
      } else {
          throw res;
      }
    })
    .then(data =>{
      const {user, token} = data;
      localStorage.setItem('jwtToken', token);
      return dispatch(receiveCurrentUser(user));
    })
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(logoutUser());
};

export const getCurrentUser = () => async dispatch => {
  const res = await jwtFetch('/api/users/current');
  const user = await res.json();
  return dispatch(receiveCurrentUser(user));
};

///selector for current user

export const selectSession = state => state.session
export const selectCurrentUser = createSelector([selectSession], session=> session.user)

const initialState = {
  user: undefined
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { user: action.currentUser };
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

const nullErrors = null;

export const sessionErrorsReducer = (state = nullErrors, action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

export default sessionReducer;
