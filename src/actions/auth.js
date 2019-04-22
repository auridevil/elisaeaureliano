export const VALIDATE_AUTH = "VALIDATE_AUTH";
export const AUTH_OK = "AUTH_OK";
export const AUHT_KO = "AUTH_KO";

export const auth = value => async dispatch => {
    dispatch({ type: VALIDATE_AUTH, token: value });
    try {
        console.log("axios call");
        if (value === "elisaeaureliano") {
            dispatch({ type: AUTH_OK });
        } else {
            dispatch({ type: AUHT_KO });
        }
    } catch (err) {
        console.log("error in axios auth", err);
        dispatch({ type: AUHT_KO });
    }
};
