import { GET_USER_DATA } from '../Actions/actionTypes';


const initialState = {
    user: {}
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};