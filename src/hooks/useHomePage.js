import { useState, useContext} from "react";
import { createTaskList, deleteTaskList, taskListsByOwner, updateTaskList } from "@/graphql/tasksListCardGraphql";
import { useRouter } from "next/router";
import { SessionContext } from "@/contexts/SessionContext";

import { useMutation, useQuery } from "@apollo/client";

export const useHomePage = () => {
  const router = useRouter()
const { user } = useContext(SessionContext) 

//Estado con el se capturo el id para eliminar la taskList
const [taskListId, setTaskListid] = useState("")

   //query taskListsByOwner
    const { data: taskList } = useQuery(taskListsByOwner, {
    variables: {
      ownerId: user?.id,
    },
  });

 // console.log("lll",taskList);
  
// mutation delete taskList
const[taskListDelete, {data: isTaskListDelete}] = useMutation(deleteTaskList,{
  refetchQueries:[
    {
      query: taskListsByOwner, 
      variables:{
        ownerId: user?.id,
       // taskListId: router.query.id,
      }
    }
  ]
})
// function delete handleDeleteTaskList
const handleDeleteTaskList = ()=>{
  taskListDelete({
    variables: {
      id: taskListId
    }
  })
}

// mutation create taskList
const [taskListCreate]= useMutation(createTaskList,{
  refetchQueries:[
    {
      query: taskListsByOwner,
      variables: {
        ownerId: user?.id,
        
      },
    },
  ]
});

const initialValues = {
  name: "",
};
const validate = (values)=>{
  let error = {}
  if(values.name.length < 1)
  { error.name = "Por favor ingresa un name Task" }
  return error;
}

const onSubmit = (values,{ resetForm})=>{
  resetForm();
  // console.log(values);
  taskListCreate({
    variables: {
      name: values.name,
      ownerId: user.id,
      foreground: "#000",
      background: "#FFF",
    },
  })
}

  // const [taskListUpdate] = useMutation(updateTaskList,{
  //   refetchQueries:[
  //     {
  //       query:taskListsByOwner,
  //       variables:{
  //         ownerId: user.id,
  //         name
  //       }
  //     }
  //   ]
  // })

  return {
    taskList,
    user,
    handleDeleteTaskList,
    validate,
    // crear taskList
    initialValues,
    onSubmit,
    setTaskListid
  };  
};