import React from 'react'
import { Alert, AlertIcon, Center } from "@chakra-ui/react";
export const AlertCom = ({status,message}) => {
  console.log(status,message)
  return (
    <Center>
    <Alert position="absolute" top="200px" w="50%" status={status}>
        <AlertIcon />
        {message}
    </Alert>
</Center>
  )
}
