import { Box, useDisclosure } from "@chakra-ui/react";
import { TaskCard } from "@/components/TaskCard";
import { TaskCardForm } from "@/components/TaskCartForm";
import { useCard } from "@/hooks/useCard";
import { useTaskCardEditPage } from "@/hooks/useTaskCardEditPage";

export const TasksContainer = () => {
const { isOpen, onOpen, onClose } = useDisclosure();
const {
tasksCard,
initialValues,
validate,
onSubmit,
handleDeleteTask,
archivedTask,
setTaskCardId
} = useCard();



return (
<Box m="5" w="100%">
<TaskCardForm
     initialValues={initialValues}
     validate={validate}
     onSubmit={onSubmit}
   />
<TaskCard
     tasksCard={tasksCard}
     handleDeleteTask={handleDeleteTask}
     archivedTask={archivedTask}
     setTaskCardId={setTaskCardId}
     isOpen={isOpen}
     onClose={onClose}
     onOpen={onOpen}
     onSubmit={onSubmit}
   />
</Box>
);
}