import { POST_CONTENT } from "../actionTypes/contentActionTypes"

const initialState = {
    formData: []
}

const content_reducers = (state = initialState, action) => {

    switch (action.type) {
        case POST_CONTENT:
            return {
                ...state,
                formData: [...state.formData, action.payload]
            }


        //export default set initial state
        default:
            return state
    }
}

export default content_reducers