import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Icon,
    Link,
    Grid
  } from '@chakra-ui/react'

import { SessionContext } from "@/contexts/SessionContext";
import { useRouter } from "next/router";

export const NavbarLayout = ({children}) => {
  const {user, setUser, logout} = useContext(SessionContext)
  const router = useRouter();

  return ( 
      
      <Box as="section" pb={{base: '12',md: '24', }}>
        
      <Box as="nav" bg="bg-surface" boxShadow="sm">
      
      <Container py={{ base: "4", lg: "5" }}>
        
            <HStack spacing="10" justify="space-between">
              
                <Flex justify="space-between" flex="1">
                  <ButtonGroup
                    variant="link"
                    spacing=""
                    fontSize="40"
                    color="#0987A0"
                  >
                    TASK-BAG
                  </ButtonGroup>
                  <HStack spacing="2">
                    {user?.id ? (
                      <>
                      <Button
                          as={Link}
                          href="/homePage"
                          colorScheme="blue"
                          variant="outline">
                        <Icon as={AiFillHome} boxSize={6} />
                        </Button>
                        <Button colorScheme="red" variant="outline" onClick={logout}>
                          logout
                        </Button>
                        
                      </>
                    ) : (
                      <>
                        { router.asPath.includes("/registerPage")?(
                        <Button
                          as={Link}
                          href="/"
                          colorScheme="blue"
                          variant="outline" > Sign in
                        </Button>
                        ):( 
                          <Button
                          as={Link}
                          href="/registerPage"
                          colorScheme="blue"
                          variant="solid" > Sign up
                        </Button>
                        )
                        }
                      
                      </>
                    )}
                  </HStack>
                </Flex>
            </HStack>
          </Container>
          <Grid h='calc(100vh - 100px)'>
            {children({ user, setUser })}
          </Grid>  
      </Box>
        
      </Box>
      
  )
};
