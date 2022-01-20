import { GENERATE_ACTIVITY } from '../actions/actions';

const initialState = {
   activity = ''
}

const reducer = (state, action) => {
    
    switch (action.type) {

        case GENERATE_ACTIVITY:
            return { ...state, activity: state.activity };
       
        default:
            return state;
        }

    };

export default reducer;