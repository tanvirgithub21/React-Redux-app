import { createStore } from "redux"
import content_reducers from "./reducers/content_reducers"

const store = createStore(content_reducers)

export default store