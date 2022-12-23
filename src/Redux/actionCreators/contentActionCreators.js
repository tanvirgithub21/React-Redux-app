import { POST_CONTENT } from "../actionTypes/contentActionTypes"

export const post_content = (tag) => {
    return {
        type: POST_CONTENT,
        payload: tag,
    }
}