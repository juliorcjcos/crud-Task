import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { useRouter } from "next/router";
import { AlertDelete } from "../AlertDelete";

export const TaskListCard = ({ handleDeleteTaskList, taskList, setTaskListid}) => {
  // estado para seleccionar la List y pasar el elemento en la funcion onClick del boton eliminar 
  const [selectedList, setSelectedList] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  // console.log(taskList?.taskListsByOwner);
  return (
    <>
      {taskList?.taskListsByOwner.map((el, i) => (
        <Card
          key={i}
          w="250px"
          bg="#0001"
          m="2"
          p="2"
          alignItems="center"
          h="100px"
          justify="center"
          cursor="pointer"
          _hover={{ w: "250px", bg: "#0002" }}
          boxShadow={"0 5px 0px 0px rgb(72 100 120 / 33%)"}
          
        >
          <Text
            bg="gray"
            alignSelf="flex-start"
            w="25px"
            h="1"
            borderRadius="50"
            textAlign="center"
          >
            {i + 1}
          </Text>
          <CardHeader onClick={() => {
            router.push(`/tasks/${el.id}`);
          }} >
            <Heading size="md">{el.name}</Heading>
          </CardHeader>

          <ButtonGroup spacing="24">
            <Button variant="outline" size="sm">
              <Icon as={BiEdit} boxSize={7} color="blue.500" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                setSelectedList(el);
                onOpen();
                await setTaskListid(el.id);
                //   handleDeleteTaskList(el.id);
              }}
            >
              <Icon as={RiDeleteBinLine} boxSize={7} color="red.500" />
            </Button>
          </ButtonGroup>
        </Card>

        
      ))}

      <AlertDelete
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
        title={`Eliminar ${selectedList.name}`}
        body={"Deseas eliminar esta lista de tareas?"}
        handleDelete={handleDeleteTaskList}
      />
    </>
  );
};
