import axios from "axios"
import { USER_GET_FAILURE, USER_GET_REQUEST, USER_GET_SUCCESS } from "./user.actionType"



export const userAction =(page, gender="undefined", country="undefined")=>async(dispatch)=>{
    dispatch({type:USER_GET_REQUEST})
    
    let data= axios.get(`http://localhost:8080/cointab?page=${page}&gender=${gender}&country=${country}`).then((res)=>{
        
        dispatch({type:USER_GET_SUCCESS,payload:res.data.message})
    }).catch((err)=>{
        dispatch({type:USER_GET_FAILURE})
        console.log(err.message)
    })

}