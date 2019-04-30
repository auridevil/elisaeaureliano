import axios from "axios";

export const VALIDATE_AUTH = "VALIDATE_AUTH";
export const AUTH_OK = "AUTH_OK";
export const AUHT_KO = "AUTH_KO";

const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const AUTH_URL = "simpleexchanger-7t2g1yqrx.now.sh:443/";

const getItem = k => typeof window !== "undefined" && JSON.parse(window.localStorage.getItem(k));
const setItem = (k, d) => typeof window !== "undefined" && window.localStorage.setItem(k, JSON.stringify(d));

export const auth = value => async dispatch => {
    dispatch({ type: VALIDATE_AUTH, token: value });
    try {
        /** avoid lot of backend calling - free tier */
        const localData = getItem(AUTH_URL);
        if (localData) {
            dispatch({ type: AUTH_OK, payload: localData });
        } else {
            const url = value && value.length > 0 ? `${CORS_URL}${AUTH_URL}?k=${value}` : `${CORS_URL}${AUTH_URL}${window.location.search}`;
            const { data } = await axios.get(url, { crossDomain: true });
            if (data && data.status != 401) {
                dispatch({ type: AUTH_OK, payload: data });
                setItem(AUTH_URL, data);
            } else {
                dispatch({ type: AUHT_KO, payload: data });
            }
        }
    } catch (err) {
        if (typeof window !== "undefined") console.log("error in axios auth", err); // ssr gives errors here
        dispatch({ type: AUHT_KO });
    }
};
