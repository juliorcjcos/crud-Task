import React from "react";
import { Box, useDisclosure} from "@chakra-ui/react";
import { useHomePage } from "@/hooks/useHomePage";
import { TaskListCard } from "@/components/TaskListCard";
import { TasksListFormCreate } from "@/components/TasksListFormCreate";

export const SidebarLayout = ({ children}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    validate,
    taskList,
    initialValues,
    handleDeleteTaskList,
    onSubmit,
    setTaskListid,
  } = useHomePage()

  return (
    <Box display="flex">
      <Box>    
        <TasksListFormCreate
          validate={validate}
          taskList={taskList}
          initialValues={initialValues}
          onSubmit={onSubmit}
          />

        <TaskListCard
          taskList={taskList}
          handleDeleteTaskList={handleDeleteTaskList}
          setTaskListid={setTaskListid}
          // isOpen={isOpen}
          // onClose={onClose}
          // onOpen={onOpen}
          />

      </Box>
      {children}
      </Box>
      
);
};
