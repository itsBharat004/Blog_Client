import React,{useContext,useState} from 'react'
// import { NewsData } from '../Assets/NewsData';
import '../Sections/SectionsStyle.css'
import FilterStoriesData from '../FilterStoriesData';
import { dataa } from '../Assets/Context';
function TopPost(props) {
const data=useContext(dataa);// getting news data 

    // console.log(count)
    function generateRandom(){
      return (props.isHome)? props?.initialIds+Math.floor(Math.random()*74): props?.initialIds+Math.floor(Math.random()*14)
    }
    return (
    <div className="TopPost">
    
  

        <div>
    <FilterStoriesData type={"type5"} id={generateRandom()} counter={"1"} />       
     </div>
        <div>
    <FilterStoriesData type={"type5"} id={generateRandom()} counter={"2"} />       
     </div>
        <div>
    <FilterStoriesData type={"type5"} id={generateRandom()} counter={"3"} />       
     </div>
        <div>
    <FilterStoriesData type={"type5"} id={generateRandom()} counter={"4"} />       
     </div>
      
      
    
     
  </div>
 
  ) 
}
export default TopPost;
