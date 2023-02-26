import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Center, Checkbox, Flex, Image, Select, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AlertCom } from '../Components/Alert';
import { userAction } from '../Redux/UserData/user.action';
import { Loading } from '../Components/Loading';

const Locations = ['United Kingdom', 'Serbia', 'Brazil', 'United States', 'Ukraine', 'Spain', 'Switzerland', 'Germany'];

export const User = () => {
    const [page, setPage] = useState(1);
  const [gender, setGender] = useState("undefined");
  const [country, setCountry] = useState("undefined");

  const User= useSelector((store)=>store.user)
   
  const dispatch= useDispatch();

  const getUser=(page, gender, country)=>{
    
     dispatch(userAction(page,gender,country))
    
  }
  

  useEffect(()=>{
    getUser(page,gender,country)
  },[page,gender,country]);
  console.log(User.userData)
  if(User.userData.length==0){
    return (
        <>
        <AlertCom status={"error"} message={"Database is Empty"} />
            <Center>
                <Button position="absolute" top="250px" onClick={getUser} colorScheme="orange" >Reload</Button>
            </Center>
        
        </>
    )
  }

  return (
    <>
     <Flex justifyContent={"center"} gridGap="20px" backgroundColor={"black"}>
        {/* genter filter */}
        <Select w="200px" onChange={(e) => { setGender(e.target.value); setPage(1) }} backgroundColor="white" placeholder='Choose Gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </Select>
        {/* location filter */}
        <Select w="200px" onChange={(e) => { setCountry(e.target.value); setPage(1) }} backgroundColor="white" placeholder='Choose Location'>
          {
            Locations.map((ele) => <option value={ele}>{ele}</option>)
          }
        </Select>
      </Flex>

      <TableContainer backgroundColor="black">
        <Table backgroundColor="white" w="80%" m="20px auto" variant='striped' >
          <Thead>
            <Tr>
              <Th>Srno.</Th>
              <Th>Picture</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Location</Th>
              <Th>Age</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* loading  */}
            {
              (User.Loading) ? <Tr> <Td textAlign="center" colSpan="6"><Loading /></Td></Tr> : ""
            }

            {/* mapping userDetails */}
            {
              User.userData.map((el, i) => (
                <Tr>
                  <Td >{(page - 1) * 10 + i + 1}</Td>
                  <Td>{el.name.title + " " + el.name.first}</Td>
                  <Td> <Image borderRadius="50%" w="30px" src={el.picture.thumbnail} /></Td>
                  <Td >{el.gender}</Td>
                  <Td >{el.email}</Td>
                  <Td >{el.phone}</Td>
                  <Td >{el.location.country}</Td>
                  <Td >{el.dob.age}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>

      <Center backgroundColor={"black"} >
        <Button m="10px" isDisabled={page == 1} onClick={() => { setPage(page - 1) }} colorScheme='purple'>Prev</Button>
        <Button m="10px" colorScheme='purple'>{page}</Button>
        <Button m="10px" isDisabled={User.userData.length < 10} onClick={() => { setPage(page + 1) }} colorScheme='purple'>Next</Button>
      </Center>
    </>
  )
}
