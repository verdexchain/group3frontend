import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw Error('UseAuthContext must be used inside a authContextProvider')
      }
      return context
}