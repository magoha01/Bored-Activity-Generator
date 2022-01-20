import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from '../actions/actions';

const initialState = {

   randomActivity: '',
   isFetching: false,
   error: ''
}

const reducer = (state=initialState, action) => {
    
    switch (action.type) {

        case FETCH_START:
            return{ ...state,
            randomActivity: 'Press the Button!',
            isFetching: true,
            error: ''
        };

        case FETCH_FAIL:
            return { ...state,
                randomActivity: '',
                isFetching: false,
                error: action.payload
            }

        case FETCH_SUCCESS:
            return{ ...state,
                randomActivity: action.payload,
                isFetching: false,
                error: ''
            };

        default:
            return state;
        }
    };

export default reducer;