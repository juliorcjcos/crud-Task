import { UserFormRegister } from "@/components/UserFormRegister";
import { useRegisterPage } from "@/hooks/useRegisterPage";
import React from "react";

export const RegisterPageContainer = ()=>{
    const { initialValues, validate, onSubmit } = useRegisterPage()
    return(
        <>
        <UserFormRegister initialValues={ initialValues} validate={validate} onSubmit={onSubmit}/>
        </>
    )
}