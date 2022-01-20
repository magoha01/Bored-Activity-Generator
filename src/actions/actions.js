export const GENERATE_ACTIVITY = "GENERATE_ACTIVITY"
export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS"


export const generateActivity = ()=>{
    return(dispatch) => {
        dispatch(type:)
    };
}

export const fetchStart = ()=>{
    return({type: FETCH_START});
}

export const fetchFail = (errorMessage)=>{
    return({type: FETCH_FAIL, payload:errorMessage});
}

export const fetchSuccess = (activity)=>{
    return({type: FETCH_SUCCESS, payload:activity});
}