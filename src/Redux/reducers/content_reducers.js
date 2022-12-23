import { POST_CONTENT } from "../actionTypes/contentActionTypes"

const content_reducers = (state = { formData: [] }, action) => {

    switch (action.type) {
        case POST_CONTENT:
            console.log("enter reducer");
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