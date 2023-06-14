
import { UserFormLogin } from "@/components/UserFormLogin";
import { useUserFormLogin } from "@/hooks/useUserFormLogin";
import React from "react";

export const LoginPageContainer = ()=>{
    const { validate, initialValues, onSubmit } = useUserFormLogin();
    return(
        <>
        <UserFormLogin validate={validate} initialValues={initialValues} onSubmit={onSubmit}/>
        </>
    )
}