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
  Icon,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiEdit } from "react-icons/bi";
import { useTaskCardEditPage } from "@/hooks/useTaskCardEditPage";

export const TaskCardEdit = ({title,body,date,id}) => {
  const {initialValues,validate, onSubmit} = useTaskCardEditPage({title,body,date,id})

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const ref = React.createRef();

  return (
    <Box m="auto" p="5">
      <Button onClick={onOpen} rounded={'xl'} 
        variant="ghost" _hover={{
        bg: 'blue.200', }}
        _focus={{
        bg: 'blue.200', }} >
      <Icon onClick={onOpen} as={BiEdit} boxSize={5} color='blue.500'/>
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
              <ModalHeader>Editar Task Card</ModalHeader>
              <ModalBody pb={6}>
                <FormLabel>title</FormLabel>
                <Field
                  _placeholder={{ color: "gray" }}
                  as={Input}
                  name="title"
                  type="text"
                  // onChange={(e)=>{
                  //   setValuesInput({
                  //     ...valuesInput,
                  //     title: e.target.value
                  //   })
                  // }}
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
                  // onChange={(e)=>{
                  //   setValuesInput({
                  //     ...valuesInput,
                  //     body: e.target.value
                  //   })
                  // }}
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
