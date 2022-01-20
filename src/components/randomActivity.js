import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import { generateActivity } from '../actions/actions';
import {  getActivity  } from '../actions/actions'
import axios from 'axios';

const RandomActivity = (props) => {

    const { randomActivity, error, isFetching, dispatch} = props;

    useEffect(()=>{
        dispatch(getActivity());
    }, []);

    if (error) {
        return <h2>WHOOPS</h2>
    }

    if (isFetching) {
        return <h2>FETCHING</h2>
    }
    
    const handleGetActivity = () => {
        dispatch(getActivity());
      }


    return (
        <div>
            <p>{randomActivity}</p>
            <button onClick={handleGetActivity}>Generate Activity</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        randomActivity: state.randomActivity,
        error: state.error,
        isFetching: state.isFetching
    })
}

export default connect(mapStateToProps)(RandomActivity);