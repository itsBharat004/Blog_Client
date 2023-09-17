import React, { useContext } from 'react'
import { dataa } from '../Assets/Context'
import FilterStoriesData from '../FilterStoriesData'
const LatestArticle = () => {
  const data=useContext(dataa)
// console.log(data)
const random=()=>{
  return Math.floor((Math.random()*74)+1);
 }
  return ( 
    <>
    <h1> Latest Article</h1>
  <div className="LatestArticle">
    <FilterStoriesData type={"type4"} id={random()} />       
<FilterStoriesData type={"type4"} id={random()} />       
<FilterStoriesData type={"type4"} id={random()} />       
<FilterStoriesData type={"type4"} id={random()} />        

    <img src={data[random()].images} alt="not found" className='LatestArticleImg' />
    </div>
</>

  )
}
export default LatestArticle;

// export default SectionHoc(LatestArticle);
