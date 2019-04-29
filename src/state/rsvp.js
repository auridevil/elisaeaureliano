import { RSVP_SUCCESS } from "../actions/rsvp";
const initialState = {
    rsvpDone: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RSVP_SUCCESS:
            return { ...state, rsvpDone: true };
        default:
            return state;
    }
};
