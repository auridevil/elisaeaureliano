import { AUTH_OK } from "../actions/auth";
const initialState = {
    authDone: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_OK:
            return { ...state, authDone: true };
        default:
            return state;
    }
};
