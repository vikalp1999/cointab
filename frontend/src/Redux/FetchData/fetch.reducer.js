import { FETCH_DONE, FETCH_GET_FAILURE, FETCH_GET_REQUEST, FETCH_GET_SUCCESS } from "./fetch.actionType"

const initialState = {
    Loading: false,
    Success: false,
    Failure: false
}

export const fetchReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case FETCH_GET_REQUEST: {
            return {
                ...state,
                Loading: true,
                Success: false,
                Failure: false
            }
        }

        case FETCH_GET_SUCCESS: {
            return {
                ...state,
                Loading: false,
                Success: true,
                Failure: false
            }
        }

        case FETCH_GET_FAILURE: {
            return {
                ...state,
                Loading: false,
                Success: false,
                Failure: true
            }
        }
        case FETCH_DONE:{
            return{
                ...state,
                Loading: false,
                Success: false,
                Failure: false
            }
        }


        default:{
            return state
        }
    }

}