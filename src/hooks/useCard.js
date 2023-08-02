import { useState, useContext } from "react";
import { createTask, deleteTask, tasksByOwner, updateTask} from "@/graphql/tasksCardGraphql";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SessionContext } from "@/contexts/SessionContext";


export const useCard = () => {
  const router = useRouter();
  //const [user, setUser] = useState(null);
  const {user} = useContext(SessionContext)
  
  // estado con el que se capturo el id para eliminar la taskCard
    const [taskCardId, setTaskCardId]= useState("")
    
  // si no existe sesion useLogin se agrega  a setUser y se rutea router.push / al inicio session
  // validar user para ingresar a las taskCard
  // useEffect(() => {
  // if (!user) {
  //   console.log('entro');
  //   router.push("/");
  //  }}, [user]);
  
  // mutation delete task
  const [taskDelete] = useMutation(deleteTask, {
    refetchQueries: [
      {
        query: tasksByOwner,
        variables: {
          ownerId: user?.id,
          taskListId: router.query.id, 
        },
      },
    ],
  });
  // function delete handleDeleteTask
  const handleDeleteTask = async () => {
    await taskDelete({
      variables: {
        // id,
        id: taskCardId
      },
    });
  };


  // query tasksByOwner
  const { data: tasksCard } = useQuery(tasksByOwner, {
    variables: {
      ownerId: user?.id,
      taskListId: router.query.id,
    },
  });

  // mutation create task
  const [taskCreate] = useMutation(createTask, {
    refetchQueries: [
      {
        query: tasksByOwner,
        variables: {
          ownerId: user?.id,
          taskListId: router.query.id,
        },
      },
    ],
  });

  const initialValues = {
    title: "",
    body: "",
    date: "",
    background: "blue",
    foreground: "blue",
  };

  const validate = (values)=>{
    let error = {}
    if(values.title.length < 1)
    { error.title = "Por favor ingresa un titulo valido" }
    if(values.body.length < 1)
    { error.body = "Por favor ingresa una descripcion valida" }
    if(values.date.length < 1)
    { error.date = "Por favor ingresa una fecha valida" }
    return error;
    
}
  // values validar los atos ingresados en el formulario
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    taskCreate({
      variables: {
        ownerId: user?.id,
        taskListId: router.query.id,
        title: values.title,
        body: values.body,
        expireAt: values.date,
        background: values.background,
        foreground: values.foreground,
      },
    });
   // console.log("sss",values);
  };

    // mutation arcivar como completada task
    const [updateTaskCard] = useMutation (updateTask,{
        refetchQueries:[{
          query:tasksByOwner,
          variables:{
            ownerId: user?.id,
            taskListId: router.query.id
          }
        }]
    })

    // funcion archivar taskCard
  const archivedTask = async(id, completed)=>{
    // console.log(completed);
    if (completed) {
      await updateTaskCard ({
      variables:{
        id,
        completed:false,
      }
      })
      
    }
    if (!completed) {
      await updateTaskCard ({
        variables:{
          id,
          completed:true,
        }
        })
    }
  };

  return {
    initialValues,
    validate,
    handleDeleteTask,
    tasksCard,
    setTaskCardId,
    onSubmit,
    archivedTask,
    updateTaskCard,
  };
};
