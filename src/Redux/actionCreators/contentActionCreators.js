import { POST_CONTENT } from "../actionTypes/contentActionTypes"

export const post_content = (content_data) => {
    return {
        type: POST_CONTENT,
        payload: content_data,
    }
}