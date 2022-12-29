import { POST_CONTENT } from "../actionTypes/actionTypes"

export const add_content = (content) => {
    return {
        type: POST_CONTENT,
        payload: content,
    }
}