import React from "react";
import {
  Box,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Grid,
  Center,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const UserFormLogin = ({ validate, initialValues, onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              {" "}
              to enjoy all of our cool <Link color={"blue.400"}>
                features
              </Link>{" "}
              
            </Text>
          </Stack>
          <Center>
            <Grid
              gap={4}
              p={12}
              bg={"white"}
              borderRadius={9}
              color={"black"}
              mt={5}
              boxShadow={"lg"}
            >
              <Field
                _placeholder={{ color: "gray" }}
                as={Input}
                name="email"
                type="email"
                placeholder="email"
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <Field
                _placeholder={{ color: "gray" }}
                as={Input}
                name="password"
                type="password"
                placeholder="password"
              />
              <ErrorMessage name="password">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <Checkbox>Remember me</Checkbox>{" "}
              <Link color={"blue.400"}>Forgot password?</Link>
              <Button mt={4} colorScheme="blue" type="submit">
                {" "}
                Sign in{" "}
              </Button>
            </Grid>
          </Center>
        </Form>
      </Formik>
    </>
  );
};
