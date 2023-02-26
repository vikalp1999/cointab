import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Center ,Button, Alert,Tooltip,Flex} from "@chakra-ui/react";
import { fetchAction, fetchDone } from '../Redux/FetchData/fetch.action';
import { deleteAction, deleteDone } from '../Redux/DeleteData/delete.action';
import { AlertCom } from '../Components/Alert';
import {Loading} from "../Components/Loading"
import { Link } from 'react-router-dom';
 
let Local= +(localStorage.getItem("count"))||0
export const Home = () => {
    const [state,setState]=useState(false);
    const [count,setCount]=useState(Local);
   
    const fetch= useSelector((store)=>store.fetch);

    const Userdelete = useSelector((store)=>store.delete);

    const dispatch=useDispatch();


    const handleFetch=()=>{
        if(fetch.Loading){
            setState(true)
            return
        }
        setCount((e)=>{
           localStorage.setItem("count",e+1);
           return e+1;
        })
        dispatch(fetchAction())
    }

    const handleDelete=()=>{
        if(count===0){
            alert("Database is Empty");
            return 
        }
       
        if(window.confirm("If you click Database will Empty")==true){
          dispatch(deleteAction()) 
          localStorage.removeItem("count");
          setCount(0)
        }else{
            return 
        }
    }

    if(fetch.Success){
        setTimeout(() => {
            dispatch(fetchDone())
            setState(false);
        }, 1000)
    }

    if(Userdelete.Success){
        setTimeout(() => {
            dispatch(deleteDone())
        }, 1000)
    }

  
  return (
    <>
    {
    (fetch.Failure | Userdelete.Failure) ? <AlertCom status='error' message="Sorry Something is Wrong" /> : ""
    }
    {
    (state) ? <AlertCom status='warning' message="Data is Fetching" /> : ""
    }
    {
    (fetch.Success | Userdelete.Success) ? <AlertCom status='success' message="Task Completed" /> : ""
    }
   
      <Flex w="100vw" h="100vh" justifyContent={"center"} alignItems={"center"} backgroundColor={"black"} 
       flexDirection={{sm:"column",base:"column",lg:"row"}} >
        <Tooltip placement='top-start' m="5px" label='Fetch the Data'>
    <Button fontSize="20px"  p="40px 70px" m="20px" backgroundColor='orange'
      _hover={{
        background: "blue",
      }}
      onClick={handleFetch}>
        {(fetch.Loading) ? <Loading /> : ""}
    Fetch Users {count}
    </Button>
    </Tooltip>
    <Tooltip placement='top-start' m="5px" label='Delete the Data'>
    <Button fontSize="20px"  p="40px 70px" m="20px" backgroundColor='orange'
     _hover={{
        background: "red",
      }}
      onClick={handleDelete}>
    Delete Users
    </Button>
    </Tooltip>
    <Tooltip placement='top-start' m="5px" label='Get the User Table'>
     <Link to="/users">  
    <Button fontSize="20px"  _hover={{
        background: "green",
      }} p="40px 70px" m="20px" backgroundColor='orange'
       >
    User Details
    </Button>
    </Link> 
    </Tooltip>
   
    </Flex>
    </>
  )
}
