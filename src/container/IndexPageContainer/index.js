import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const IndexPageContainer = ()=>{
    return(
        <>
        <Box bg='#0987A0' w='100%' p={4} color='grey' minH={'100vh'} >
        <Text fontSize={'6xl'} textAlign='Center' color={"write"} py={5}>Welcome..</Text>
        <Text fontSize={'3xl'} textAlign='Center' color={"black"} py={1}>Enjoy our App</Text>
        </Box>
  
        </>
    )
}