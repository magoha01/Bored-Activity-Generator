import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {  getActivity  } from '../actions/actions'


const RandomActivity = (props) => {

    const { randomActivity, error, isFetching, dispatch } = props;

    useEffect(()=>{
        dispatch(getActivity());
    }, []);

    if (error) {
        return <h2>WHOOPS</h2>
    }

    if (isFetching) {
        return <img className="waitPhoto" src={'https://media2.giphy.com/media/d7mMzaGDYkz4ZBziP6/giphy.gif?cid=ecf05e47475gvvue798acppzg2f0p5fyqpaecylh6eeze5nz&rid=giphy.gif&ct=g'} alt="Loading..." />
    }
    
    const handleGetActivity = () => {
        dispatch(getActivity());
      }


    return (
        <div className="activity">
            <p>{randomActivity}!</p>
            <button onClick={handleGetActivity}>Generate New Activity</button>
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