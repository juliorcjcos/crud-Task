import React from "react";
import { CardUserInfo } from "@/components/CardUserInfo";
import { useHomePage } from "@/hooks/useHomePage";

export const HomePageContainer = ()=>{
    const {user} = useHomePage();
    return(
        <CardUserInfo user={user}/>
        
    )
}