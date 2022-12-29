import { POST_CONTENT } from "../actionTypes/actionTypes"

const initialState = {
    contents: []
}

const content_reducers = (state = initialState, action) => {


    switch (action.type) {
        case POST_CONTENT:
            return {
                ...state,
                contents: [...state.contents, action.payload]
            }


        //export default set initial state
        default:
            return state
    }
}

export default content_reducers