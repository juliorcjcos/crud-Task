import { Card} from '@chakra-ui/react'
import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Grid,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';


export const CardUserInfo = ({user}) => {
   // console.log("uuuu",user);
  return (
    <>
    {user &&

      <Grid w='100%' justifyContent='center' alignItems='center'>
      <Box
        w="500px" 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        overflow={'hidden'}>
        <Image
          h={'110px'}
          w={'full'}
          src={user.avatar}
          objectFit={'cover'}
          opacity={0.3}/>

        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={user.avatar}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }} />
          
        </Flex>
        <Card p={6} >
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>{user.name}</Heading>
            <Text color={'gray.500'}>{user.email}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user?.phone}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Tel
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.nit}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Nit
              </Text>
            </Stack>
          </Stack>

          <Button margin="auto"
            w="40"
            mt={8}
            bg={useColorModeValue('blue.400')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Edit
          </Button>
        </Card>
      </Box>
    </Grid>
    }
    </>
  )
}




