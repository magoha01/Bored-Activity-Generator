import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions/actions";

const initialState = {
  randomActivity: "Let's fix that.",
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        randomActivity:
          "https://media2.giphy.com/media/d7mMzaGDYkz4ZBziP6/giphy.gif?cid=ecf05e47475gvvue798acppzg2f0p5fyqpaecylh6eeze5nz&rid=giphy.gif&ct=g",
        isFetching: true,
        error: "",
      };

    case FETCH_FAIL:
      return {
        ...state,
        randomActivity: "",
        isFetching: false,
        error: action.payload,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        randomActivity: `${action.payload}.`,
        isFetching: false,
        error: "",
      };

    default:
      return state;
  }
};

export default reducer;
