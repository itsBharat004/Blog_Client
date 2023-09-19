import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
const dataa = createContext();

const Context = ({ children }) => {
  const [arrObj, setArrObj] = useState("");

  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_ULR}/Artical`;
    // const baseUrl = "https://blog-server-mm8b.onrender.com/Artical";
    // const baseUrl="http://localhost:4040/Artical";
    axios.get(baseUrl).then((info) => setArrObj(info.data));
    console.log(arrObj);
  }, []);
  return (
    <>{arrObj && <dataa.Provider value={arrObj}>{children}</dataa.Provider>}</>
  );
};

export default Context;
export { dataa };
