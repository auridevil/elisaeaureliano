import axios from "axios";

export const VALIDATE_AUTH = "VALIDATE_AUTH";
export const AUTH_OK = "AUTH_OK";
export const AUHT_KO = "AUTH_KO";

const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const AUTH_URL = "simpleexchanger-7t2g1yqrx.now.sh:443/";

export const auth = value => async dispatch => {
    dispatch({ type: VALIDATE_AUTH, token: value });
    try {
        /** avoid lot of backend calling - free tier */
        const localData = JSON.parse(localStorage.getItem(AUTH_URL));
        if (localData) {
            dispatch({ type: AUTH_OK, payload: localData });
        } else {
            const { data } = await axios.get(`${CORS_URL}${AUTH_URL}?k=${value}`, { crossDomain: true });
            if (data && data.status != 401) {
                dispatch({ type: AUTH_OK, payload: data });
                localStorage.setItem(AUTH_URL, JSON.stringify(data));
            } else {
                dispatch({ type: AUHT_KO, payload: data });
            }
        }
    } catch (err) {
        console.log("error in axios auth", err);
        dispatch({ type: AUHT_KO });
    }
};
