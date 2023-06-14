import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  FormLabel,
  Input,
  Box,
  FormControl,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const TaskCardForm = ({ initialValues, validate, onSubmit,  }) => {
//console.log(onSubmit);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const ref = React.createRef();
  return (
    <Box m="auto" p="5">
      <Button onClick={onOpen} colorScheme="blue">
        Create Task
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay/>

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          <Form>
      
            <ModalContent>
              <ModalHeader>Create</ModalHeader>
              
              <ModalBody pb={6}>
                <FormLabel>title</FormLabel>
                <Field
                  _placeholder={{ color: "gray" }}
                  as={Input}
                  name="title"
                  type="text"
                  placeholder="name Task"
                />
                <ErrorMessage name="title">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
                <FormLabel>Description</FormLabel>
                <FormControl mt={4}>
                <Field
                  _placeholder={{ color: "gray" }}
                  as={Input}
                  name="body"
                  type="text"
                  placeholder="Description"
                />
                </FormControl>
                <ErrorMessage name="body">
                {(msg) => (
                  <Box fontSize="sm" color="red">
                    {msg}
                  </Box>
                )}
              </ErrorMessage>
              <FormControl mt={4}>
              <FormLabel>Fecha de expirado</FormLabel>
              <Field
                  _placeholder={{ color: "gray" }}
                  as={Input}
                  name="date"
                  type="date"
                />
                </FormControl>
              </ModalBody>
                
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit" onClick={onClose}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        </Formik>
      </Modal>
    </Box>
  );
};
