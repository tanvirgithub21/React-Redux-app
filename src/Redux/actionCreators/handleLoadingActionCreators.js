import { HANDLE_LOADING } from "../actionTypes/actionTypes"

export const handle_loading = value => {
    return {
        type: HANDLE_LOADING,
        payload: value,
    }
}