import React,{useContext,useState} from 'react'
// import { NewsData } from '../Assets/NewsData';
import '../Sections/SectionsStyle.css'
import FilterStoriesData from '../FilterStoriesData';
import { dataa } from '../Assets/Context';
const TopStories=(props)=> {


    const data=useContext(dataa);// getting news data 
    
    const [load,setLoad]=useState(6)
    // load logic
    const increaseLoad=()=>{
      if(load*2<15){
        setLoad(load*2);
      }else{
        setLoad(15);
      }
    }
    return (
    <>
     {
     data.map((item,index)=>{
      return(
        <div key={index}>
    <FilterStoriesData type={"type4"} id={item.id} />       
     </div>
      )
      
     }) .slice(props.initialIds-1,props.initialIds-1+load)    
     
   
    
     }
   {/* Load more feature works for Top stories */}
   {load<15&&  
    <button className="loadMore" onClick={increaseLoad} >
      <img src='/images/arrow@2x.png' alt="not found" className="loadMoreImg"/>  <span>LOAD MORE</span>
      </button>
     }
 
   </>
 
  ) 
  
 
}

export default TopStories;