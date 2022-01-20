import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import { generateActivity } from '../actions/actions';
import { fetchStart, fetchFail, fetchSuccess  } from '../actions/actions'
import axios from 'axios';

const RandomActivity = (props) => {

    const { activity, error, isFetching } = props;

    if (error) {
        return <h2>WHOOPS</h2>
    }

    if (isFetching) {
        return <h2>FETCHING</h2>
    }
    
  
       useEffect(()=>{ 
        dispatchEvent(fetchStart());
        axios.get('http://www.boredapi.com/api/activity')
        .then(resp => {
            console.log(resp.data)
            dispatch(fetchSuccess(resp.activity))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })}, []);
      

    return (
        <div>
            <p>{activity}</p>
            <button>Generate Activity</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        activity: state.activity,
        error: state.error,
        isFetching: state.isFetching
    })
}

export default connect(mapStateToProps)(RandomActivity);