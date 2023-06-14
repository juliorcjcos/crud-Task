import React, {useState, useEffect} from "react";
import{createContext} from "react";

import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { userLogin } from "@/graphql/users";
 
export const SessionContext = createContext();// crear contexto
const SessionContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const router = useRouter();

    const[logIn,{data:session}] = useLazyQuery(userLogin)
    
    // getItem en localStorage y se trae la  session1 y se guarda en setUser
  useEffect(() => {
    const getUser = localStorage.getItem("session1")
    if (getUser !== 'undefined') {
        //console.log('getUser')
        const result = JSON.parse(getUser)
        setUser(result)
    }else{
        getUser(null)
    }
  }, []);

  // logout 
  // removeItem se elimina un elemento de localStorage ("session1") y se agrega ruta con router.push / cierre session
  const logout = () => {
      localStorage.removeItem("session1");
      setUser(null);
      router.push("/");
  };


  // si existe sesion useLogin se agrega  a setUser y se rutea router.push /homePage  al iniciar session
        useEffect(() => {
            if (session?.userLogin?.name) {
              //----->setUser(session)
              setUser(session?.userLogin)
              router.push("/homePage");
            }
          }, [session]);


          // se guarda con setItem en localStorage la session1
          useEffect(()=>{
            if (user?.id) {
                localStorage.setItem("session1", JSON.stringify(user))
            }
          }, [user?.id])

          // useEffect(() => {
          //   console.log('UUUU', user)
          // }, [user])

    return(
        <SessionContext.Provider
            value={{
                user, setUser, logout, logIn,
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider