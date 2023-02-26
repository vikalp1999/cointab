import { USER_GET_FAILURE, USER_GET_REQUEST, USER_GET_SUCCESS } from "./user.actionType"


const initialState = {
    userLoading: false,
    userSuccess: false,
    userFailure: false,
    userData: []
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_GET_REQUEST: {
            return {
                ...state,
                userLoading: true,
                userSuccess: false,
                userFailure: false
            }
        }

        case USER_GET_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                userSuccess: true,
                userFailure: false,
                userData: payload
            }
        }

        case USER_GET_FAILURE: {
            return {
                ...state,
                userLoading: false,
                userSuccess: false,
                userFailure: true
            }
        }
        default: {
            return state;
        }
    }
}