
import { createUser } from "@/graphql/users";
import { useMutation } from "@apollo/client";
 export const useRegisterPage =()=>{
    const [userCreate]= useMutation(createUser,{
    })

    const initialValues = {
        name: "",
        email: "",
        password: "",
        phone: "",
        rolId: "64cabb5e02b20604a794a79e",
        genderId: "64cabaca02b20604a794a798",
        nit: "N/A",
    };

    const publicar = (values) => {
        alert(JSON.stringify(values));
    }
    const validate = (values) => {
        let errors = {};
        if(values.name.length < 1)
        { errors.name = "Por favor ingresa un nombre valido" }
        if(values.email.length < 1)
        { errors.email = "Por favor ingresa un email valido" }
        if (values.password.length < 4)
        errors.password = "La contraseña tiene que ser maryor o igual a 5 digitos";
        return errors;
    };

    const onSubmit = async (values,{resetForm}) => {
        resetForm()
        await userCreate({
        variables: {
            name: values.name,
            nit: values.nit,
            email: values.email,
            password: values.password,
            phone: values.phone,
            rolId: values.rolId,
            genderId: values.genderId,
            },
        })
    };

    return{
        initialValues, 
        validate, 
        onSubmit,
    }
    }