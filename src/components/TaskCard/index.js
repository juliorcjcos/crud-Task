import React, { useState} from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ButtonGroup,
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Card,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { AlertDelete } from "../AlertDelete";
import { TaskCardEdit } from "../TaskCardEdit";

export const TaskCard = ({
  tasksCard,
  archivedTask,
  setTaskCardId,
  handleDeleteTask,
  isOpen,
  onOpen,
  onClose,
  onSubmit,
}) => {
  // estado para seleccionar la Task y pasar el elemento en la funcion onClick del boton eliminar
   const [selectedTask, setSelectedTask] = useState({});
  return (
    <>
      {tasksCard?.tasksByOwner.length > 0
        ? tasksCard?.tasksByOwner[0].taskList?.name
        : "Tasks not found"}
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Task</Tab>
          <Tab>Archived Completed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={4}>
              {tasksCard?.tasksByOwner?.map(
                (el, i) =>
                  !el.completed && (
                    <SimpleGrid
                      templateColumns={"repeat(3, 1fr)"}
                      gap={5}
                      key={i}
                    >
                      <Card
                        p="3"
                        pb={1}
                        minW="260px"
                        maxW="300px"
                        boxShadow={"0 1px 20px 0px rgb(72 100 120 / 33%)"}
                        cursor="pointer"
                      >
                        <Text
                          fontSize={"1xl"}
                          fontWeight={500}
                          bg={useColorModeValue("green.50")}
                          p={2}
                          px={3}
                          color={"green.500"}
                          rounded={"full"}
                        >
                          {el.title}
                        </Text>

                        <Text
                          fontSize={"2xl"}
                          fontWeight={700}
                          align={"center"}
                          justify={"center"}
                          minH="70px"
                          mt={3}
                        >
                          {el.body}
                        </Text>
                        <List spacing={3} mt={3}>
                          <ListItem>
                            <ListIcon as={CheckIcon} color="green.400" />
                            {el.expireAt}
                          </ListItem>
                        </List>
                        <ButtonGroup spacing="0">
                          <TaskCardEdit
                          title={el.title} body={el.body} date={el.expireAt} id={el.id}
                          />

                          <Button
                            onClick={() => {
                              archivedTask(el.id, el.completed);
                            }}
                            variant="ghost"
                            mt={5}
                            mr="5"
                            color={"white"}
                            rounded={"xl"}
                            _hover={{
                              bg: "green.200",
                            }}
                            _focus={{
                              bg: "green.200",
                            }}
                          >
                            <Icon
                              as={AiTwotoneFolderOpen}
                              boxSize={5}
                              color="green.500"
                            />
                          </Button>
                          <Button
                            onClick={() => {
                              setSelectedTask(el);
                              onOpen();
                              setTaskCardId(el.id);
                              //handleDeleteTaskList(el.id);
                            }}
                            variant="ghost"
                            mt={5}
                            mr="5"
                            color={"white"}
                            rounded={"xl"}
                            _hover={{
                              bg: "red.200",
                            }}
                            _focus={{
                              bg: "red.200",
                            }}
                          >
                            <Icon
                              as={RiDeleteBinLine}
                              boxSize={5}
                              color="red.500"
                            />
                          </Button>
                        </ButtonGroup>
                      </Card>
                    </SimpleGrid>
                  )
              )}
            </SimpleGrid>
          </TabPanel>

          {/* -----                tasksCard Archived          -----  */}

          <TabPanel>
            <SimpleGrid columns={4}>
              {tasksCard?.tasksByOwner?.map(
                (el, i) =>
                  el.completed && (
                    <SimpleGrid
                      templateColumns={"repeat(3, 1fr)"}
                      gap={3}
                      key={i}
                    >
                      <Card
                        p="3"
                        minW="260px"
                        maxW="300px"
                        boxShadow={"0 1px 20px 0px rgb(72 100 120 / 33%)"}
                        cursor="pointer"
                      >
                        <Text
                          fontSize={"1xl"}
                          fontWeight={500}
                          bg={useColorModeValue("red.50")}
                          p={2}
                          px={3}
                          color={"red.500"}
                          rounded={"full"}
                        >
                          {el.title}
                        </Text>

                        <Text
                          fontSize={"2xl"}
                          fontWeight={700}
                          align={"center"}
                          justify={"center"}
                          minH="70px"
                          mt={3}
                        >
                          {el.body}
                        </Text>
                        <List spacing={3}>
                          <ListItem>
                            <ListIcon as={CheckIcon} color="red.400" />
                            {el.expireAt}
                          </ListItem>
                        </List>

                        <ButtonGroup spacing="20">
                          <Button
                            onClick={() => {
                              archivedTask(el.id, el.completed);
                            }}
                            variant="ghost"
                            mt={3}
                            w={"full"}
                            color={"white"}
                            rounded={"xl"}
                            _hover={{
                              bg: "green.200",
                            }}
                            _focus={{
                              bg: "green.200",
                            }}
                          >
                            <Icon
                              as={AiTwotoneFolderOpen}
                              boxSize={5}
                              color="green.500"
                            />
                          </Button>
                          <Button
                            onClick={ () => {
                              onOpen();
                              setSelectedTask(el);
                              setTaskCardId(el.id);
                              //   handleDeleteTaskList(el.id);
                            }}
                            variant="ghost"
                            mt={3}
                            w={"full"}
                            color={"white"}
                            rounded={"xl"}
                            _hover={{
                              bg: "red.200",
                            }}
                            _focus={{
                              bg: "red.200",
                            }}
                          >
                            <Icon
                              as={RiDeleteBinLine}
                              boxSize={5}
                              color="red.500"
                            />
                          </Button>
                        </ButtonGroup>
                      </Card>
                    </SimpleGrid>
                  )
              )}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <AlertDelete
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          title={`Eliminar ${selectedTask.title}`}
          body={"Deseas eliminar esta taskCard?"}
          handleDelete={handleDeleteTask}
        />
    </>
  );
};
