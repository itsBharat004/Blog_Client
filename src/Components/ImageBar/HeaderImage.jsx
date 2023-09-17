import React,{useContext,useState,useEffect} from 'react'
import './HeaderImageStyle.css'
// import { NewsData } from '../Assets/NewsData'
import { dataa } from '../Assets/Context'
function HeaderImage() { 
const data=useContext(dataa)
// 1-75
const randomGenerator=()=>{
  return Math.floor(Math.random()*74) +1;
}
const [dataObj1,setDataObj1]=useState(data[randomGenerator()]);
const [dataObj2,setDataObj2]=useState(data[randomGenerator()]);
const [dataObj3,setDataObj3]=useState(data[randomGenerator()]);
// sideEffect=>setTimeout,setInterval,Api calling using fetch ,promise,generator function
useEffect(()=>{
 const ChangeImg= setTimeout(()=>{
   setDataObj1(data[randomGenerator()]);
   setDataObj2(data[randomGenerator()]);
   setDataObj3(data[randomGenerator()]);
  },5000)
  return ()=>{
    clearTimeout(ChangeImg)
  }
}
,[dataObj1,dataObj2,dataObj3,data])


  return (
    <div className='HeaderImage'>
      {/* HeaderImage1 */}
 <div className='HeaderImage1'>
  <img src={dataObj1.images} alt="HeaderImage1"  className='HeaderImg'/>
  <span className='headerText'>
  <span>{dataObj1.heading.slice(0,30)+"..."}</span>  
   <span> {dataObj1.date.slice(1)}</span>
  </span>
  </div>
  {/* HeaderImage2 */}
 <div className='HeaderImage2'>
  <img src={dataObj2.images} alt="HeaderImage2"  className='HeaderImg'/>
  <span className='headerText'>

    <span>{dataObj2.heading.slice(0,25)+"..."}</span>  
   <span> {dataObj2.date.slice(1)}</span>
  </span>
  </div>
  {/* HeaderImage3 */}
 <div className='HeaderImage3'>
  <img src={dataObj3.images} alt="HeaderImage3"  className='HeaderImg'/>
  <span className='headerText'>
  <span>{dataObj3.heading.slice(0,25)+"..."}</span>  
   <span> {dataObj3.date.slice(1)}</span>

  </span>
  </div>
    
    </div>
  )
}

export default HeaderImage
