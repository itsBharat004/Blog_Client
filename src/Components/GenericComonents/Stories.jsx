import React from 'react'
import { useNavigate } from 'react-router-dom'
import './StoriesStyle.css'
import PostedBy from './PostedBy'
const Stories = (props) => {
const navigate=useNavigate();
const token =localStorage.getItem("token");
const OpenSingleArtical=()=>{
window.scrollTo({
  top: 0,
  behavior: "smooth",
})
console.log(token);
token? navigate(`/${props?.categories}/${props?.id}`):navigate(`/Login`)
}

  return (
    
    <div className={props.type} id={"stories"} >
      <img className="storieImages" onClick={OpenSingleArtical} src= {props?.images} alt='Not Found'/>
      <div className="storieHeading" onClick={OpenSingleArtical}>{props?.heading?.split(' ').slice(0,6).join(' ')+"..."}</div>
      {(props.type==='type6')&& <PostedBy/>}
      <div className="storieDescription">{props?.description &&props?.description?.split(' ').slice(0,props?.descriptionLength).join(' ') +"..."}</div>
      <div className="storiePostBy">{props?.postBy}</div>
      <div className="storieCounter">{props?.counter}</div>
      <div className="storieDate"><span>{props?.date && props?.categories}</span><span>{props?.date}</span></div>
    </div>
  )
}

export default Stories
