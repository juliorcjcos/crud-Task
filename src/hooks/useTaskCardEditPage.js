import { useMutation, useQuery } from "@apollo/client";
import { SessionContext } from "@/contexts/SessionContext";
import { tasksByOwner, updateTask } from "@/graphql/tasksCardGraphql";
import { useRouter } from "next/router";
import { useContext } from "react";


export const useTaskCardEditPage =({title,body,date,id})=>{
const {user, setUser} = useContext(SessionContext)
const router = useRouter()

 // query tasksByOwner
 const { data: tasksCard } = useQuery(tasksByOwner, {
    variables: {
      ownerId: user?.id,
      taskListId: router.query.id,
    },
  });

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

// Fecha en formato original
 let fechaOriginal = date;
 // Crear un objeto de fecha con el formato original
 let fecha = new Date(fechaOriginal)
let year = fecha.getFullYear();
let month = ("0" + (fecha.getMonth() + 1)).slice(-2); // Se agrega 1 al mes, ya que en JavaScript los meses empiezan en 0 (enero es el mes 0)
let day = ("0" + fecha.getDate()).slice(-2);
// Crear la fecha en el nuevo formato
let fechaFormateada = year + "-" + month + "-" + day;
// Imprimir la fecha formateada
// console.log(fechaFormateada);

const initialValues = {
    id:id,
    title:title,
    body:body,
    date:fechaFormateada,
}
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

const onSubmit =  (values)=>{
       updateTaskCard({
        variables:{
            id: values.id,
            title: values.title,
            body: values.body,
            expireAt: values.date
            }

        })
       // console.log(values);
  //console.log("ssssss", user.id);
}


    return{
        initialValues,
        validate,
        onSubmit,
    }
}