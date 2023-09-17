import React, { useEffect } from 'react'
import { createContext, useState } from "react";
import axios from "axios"
 const dataa = createContext();

const Context = ({children} ) => {
    const [arrObj,setArrObj]=useState("");

    useEffect(
        ()=>{
           axios.get("http://localhost:4040/Artical")
           .then((info)=>setArrObj(info.data));
           console.log(arrObj);
        },[]
    )
  return(<>
   { arrObj && <dataa.Provider value={arrObj}>
    {children} 
    </dataa.Provider>
    }
   </> )

  
}

export default Context
export {dataa}