import { combineReducers } from "redux";
import content_reducers from "./content_reducers";
import loading_reducer from "./loading_reducer";

const RootReducer = combineReducers({
    content: content_reducers,
    loading: loading_reducer,


})

export default RootReducer