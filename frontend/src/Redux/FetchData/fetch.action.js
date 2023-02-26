import axios from "axios";
import { FETCH_DONE, FETCH_GET_FAILURE, FETCH_GET_REQUEST, FETCH_GET_SUCCESS } from "./fetch.actionType";

export let fetchDone=()=>({type:FETCH_DONE});

let ApiLink=`https://randomuser.me/api/?results=50&inc=name,gender,email,picture,phone,location,dob`

export let fetchAction=()=>async(dispatch)=>{
    dispatch({type:FETCH_GET_REQUEST});
     
    let data= axios.get(ApiLink).then((res)=>{
        
        let ans={
            data:res.data.results
        }
        axios.post(`http://localhost:8080/cointab`,ans).then((res)=>{
            dispatch({type:FETCH_GET_SUCCESS})
        }).catch((err)=>{
            dispatch({type:FETCH_GET_FAILURE})
        })
    })

}