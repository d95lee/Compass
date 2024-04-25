import {createSelector} from 'reselect'
import jwtFetch from './jwt';


//Action
export const RECEIVE_USERS = 'user/RECEIVE_USERS';
export const RECEIVE_USER = 'user/RECEIVE_USER';

//Action creator
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const receiveUsers = (users) =>({
    type: RECEIVE_USERS,
    users
});

// Selectors
export const selectUsers = state => state.users
export const selectUser = userId => createSelector(
    [selectUsers],
    users => users[userId]
);
export const selectUserByUsername = username => createSelector(
    [selectUsers], // Pass additional parameter (username)
    users => Object.values(users).find(user => user?.username === username) // Select user by username
);

//Thunk Action

export const fetchUser = (userId) => async (dispatch, getState) => {
    const res = await fetch(`/api/users/${userId}`);

    if (res.ok){
        const data = await res.json();
        dispatch(receiveUser(data));
    };
};

export const fetchUsers = () => async (dispatch) => {
    const res = await fetch('/api/users');

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUsers(data));
    }
}

export const updateBio = (bioData, userId) => (dispatch, getState) => (
    jwtFetch(`/api/users/${userId}/bio`, {
        method: "PATCH",
        body: JSON.stringify(bioData)
    })
    .then(res => {
        if(res.ok){
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data => {
        dispatch(fetchUser(data._id))
    })
)

// // export const selectUser = (userId) => state => state.user[userId]

//Reducer

const userReducer = (state={}, action) => {
    const nextState = {...state}

    switch(action.type) {
        case RECEIVE_USER:
            nextState[action.user._id] = action.user;
            return nextState;
        case RECEIVE_USERS:
            action.users.map(user => nextState[user._id] = user)
            return nextState;
            // return { ...state, ...action.users}
        default:
            return state;
    };
};

export default userReducer
