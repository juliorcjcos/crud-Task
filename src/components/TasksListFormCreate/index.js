import { Box, Button, Flex, Grid, Input } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

export const TasksListFormCreate = ({validate, initialValues, onSubmit}) => {
  return (
    
      <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      >
        <Form>
          
            <Grid w="250px" 
              boxShadow={"lg"}
              gap={1}
              p={3}
              bg={"white"}
              borderRadius={9}
              color={"black"}
              m={2}
            >
              <Field
                _placeholder={{ color: "gray" }}
                as={Input}
                name="name"
                type="text"
                placeholder="name Task"
              />
              <ErrorMessage name="name">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <Button mt={4} colorScheme="blue" type="submit">
                Add{" "}
              </Button>
            </Grid>
          
        </Form>
      </Formik>
    
  );
};
