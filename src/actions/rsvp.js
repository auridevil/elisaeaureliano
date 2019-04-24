const Airtable = require("airtable");

const RSVP_START = "RSVP_START";
const RSVP_SUCCESS = "RSVP_SUCCESS";
const RSVP_FAILED = "RSVP_FAILED";

/*
const BASECODE = "appAHmV8EPUeOYwvT";
const KEY = "key0B8euUd366pwJT";
const TABLE = "website";*/
export const rsvp = (object, authData) => async dispatch => {
    dispatch({ type: RSVP_START });
    try {
        const base = new Airtable({ apiKey: authData.KEY || KEY }).base(authData.base);
        const rowId = await base(authData.TABLE).create(object);
        dispatch({
            type: RSVP_SUCCESS,
            payload: rowId
        });
    } catch (error) {
        dispatch({
            type: RSVP_FAILED,
            payload: error
        });
    }
};
