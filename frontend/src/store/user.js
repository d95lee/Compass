
//Action
export const RECEIVE_USERS = 'user/RECEIVE_USERS';
export const RECEIVE_USER = 'user/RECEVIE_USER';

//Action creator
export const receiveUser = (user) => ({
    type: RECEIVE_USERS,
    user
});

export const receiveUsers = (users) =>({
    type: RECEIVE_USERS,
    users
});

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
        default:
            return state;
    };
};

export default userReducer
