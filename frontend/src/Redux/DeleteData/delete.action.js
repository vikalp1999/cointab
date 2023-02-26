import axios from "axios";
import { DELETE_DONE, DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS } from "./delete.ActionType";

export let deleteDone=()=>({type:DELETE_DONE})

export let deleteAction=()=>async(dispatch)=>{
    dispatch({type:DELETE_REQUEST})
    let result= axios.delete("http://localhost:8080/cointab").then((res)=>{
        dispatch({type:DELETE_SUCCESS})
    }).catch((e)=>{
        dispatch({type:DELETE_FAILURE})
    })

}