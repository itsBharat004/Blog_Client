import { useEffect, createContext, useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/ClipLoader";
const dataa = createContext();

const Context = ({ children }) => {
  const [arrObj, setArrObj] = useState("");
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_ULR}/Artical`;
    // const baseUrl = "https://blog-server-mm8b.onrender.com/Artical";
    // const baseUrl="http://localhost:4040/Artical";
    axios.get(baseUrl)
    .then((info) => {
      setArrObj(info.data);
      setLoading(!loading)});
   
  }, []);
//   function load(){
//     setLoading(!loading);
// console.log(loading);
//   }

  
  return (
    <>
    {/* <button onClick={load}>click</button> */}
    {arrObj &&
    <dataa.Provider value={arrObj}>
      {children}
      </dataa.Provider> 
     
    }
  { loading&&
   <div 
   style={
    {
    position:"absolute",
     left:"50%",top:"50%",
     transform:"translate(-50%,-50%)",
     display:"flex",
     flexDirection:"column",
     alignItems:"center"
    }
  }
   >

     <BeatLoader 
      color="#0001ff"
      loading={loading}
      speedMultiplier={1}
      />
      <p>the siren blog website</p>
    </div>}
    </>
  );
};

export default Context;
export { dataa };
