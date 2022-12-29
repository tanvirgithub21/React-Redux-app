import { HANDLE_LOADING } from "../actionTypes/actionTypes"


const initialState = {
    loading: false,
}

const loading_reducer = (state = initialState, action) => {
    switch (action.type) {

        case HANDLE_LOADING:
            return {
                ...state, loading: action.payload
            }

        //export default set initial state
        default:
            return state
    }
}

export default loading_reducer