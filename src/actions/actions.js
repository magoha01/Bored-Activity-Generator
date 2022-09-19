import axios from "axios";

//export const GENERATE_ACTIVITY = "GENERATE_ACTIVITY"
export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getActivity = () => (dispatch) => {
  dispatch(fetchStart());
  setTimeout(() => fetchSuccess, [5000]);
  axios
    .get("http://www.boredapi.com/api/activity?type=")

    .then((resp) => {
      setTimeout(() => {
        dispatch(fetchSuccess(resp.data.activity));
        console.log(resp.data)
      }, 2700);
    })
    .catch((err) => {
      dispatch(fetchFail(err));
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchFail = (errorMessage) => {
  return { type: FETCH_FAIL, payload: errorMessage };
};

export const fetchSuccess = (activity) => {
  return { type: FETCH_SUCCESS, payload: activity };
};
