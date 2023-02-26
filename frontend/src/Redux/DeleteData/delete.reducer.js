import { DELETE_DONE, DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS } from "./delete.ActionType";


let  initialState = {
    Loading: false,
    Success: false,
    Failure: false
}

export   let deletereducer= (state=initialState,{type,payload})=>{
    switch(type){
        case DELETE_REQUEST:{
            return{
                ...state,
            Loading:true,
            Success:false,
            Failure:false,
            }
        }
        case DELETE_SUCCESS:{
            return {
                ...state,
                Loading:false,
                Success:true,
                Failure:false,
            }
        }
        case DELETE_FAILURE:{
            return {
                ...state,
                Loading:false,
                Success:false,
                Failure:true,
            }
        }
        case DELETE_DONE:{
            return {
                ...state,
                Loading: false,
                Success: false,
                Failure: false
            }
        }
        default:{
            return state;
        }
    }

}