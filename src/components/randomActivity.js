import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActivity } from "../actions/actions";

const RandomActivity = (props) => {
  const { randomActivity, error, isFetching, dispatch } = props;

  const handleGetActivity = () => {
    dispatch(getActivity());
  };

  if (error) {
    return <h2>Oops!</h2>;
  }

  return (
    <div className="generator">
      <div className="activity">
        {isFetching ? (
          <img className="waitPhoto" src={randomActivity} alt="Loading..." />
        ) : (
          <p>{randomActivity}</p>
        )}
      </div>
      <div className="generateButton">
        <button onClick={handleGetActivity}>Generate New Activity</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomActivity: state.randomActivity,
    error: state.error,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(RandomActivity);
