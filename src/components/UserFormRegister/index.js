import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Center, Grid, Input,Heading, Box } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

export const UserFormRegister = ({initialValues, validate, onSubmit  }) => {

  return (
    <>
      <Heading fontSize={'4xl'} textAlign='Center' color={"black"} py={1} px={6}> Register your personal data </Heading>
      <Formik 
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit} >
        <Form>
          <Center>
            <Grid gap={4} p={12} bg={"white"} borderRadius={9} color={"black"} mt={5} boxShadow={'lg'} >
              <Field _placeholder={{ color: "gray" }} as={Input} name="name" type="text" placeholder="name"/>
              <ErrorMessage name="name">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <Field _placeholder={{ color: "gray" }} as={Input} name="email" type="email" placeholder="email"/>
              <ErrorMessage name="email">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <Field _placeholder={{ color: "gray" }} as={Input} name="password" type="password" placeholder="password"/>
              <Field _placeholder={{ color: "gray" }} as={Input} name="phone" type="text" placeholder="phone"/>
              <ErrorMessage name="password">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <Button mt={4} colorScheme="blue" type="submit"> Sign up </Button>
              <Checkbox> terms and Conditions </Checkbox>
            </Grid>
          </Center>
        </Form>
      </Formik>
   </>
  )
};
