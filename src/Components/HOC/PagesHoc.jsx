import React, { useEffect } from 'react'

import './PagesHocStyle.css'
import Navbar from '../Header/Navbar';
import TopStories from '../Sections/TopStories';
import TopPost from '../Sections/TopPost';

 
const PagesHoc = () => {
  const Hoc=(props)=>{
    useEffect(()=>{
      
    },[])
    return (
      <>
  <Navbar/>
    <div className='PagesHoc' id='PagesHoc'>
  <div className="topStoriesPage">
    <span className='TopStoriesPageSpan' >{props.name}</span>
  <TopStories initialIds={props.initialIds}/>
  </div>
<div className="TopPostPage">
<span >TopPost</span>
<TopPost initialIds={props.initialIds}/>
<img className="adv" style={{objectFit:"contain" ,height:"300px"}} alt="not found"src="https://mediasamosa.com/wp-content/uploads/2020/01/printad-696x985.jpg"/>

</div>
    </div>
</>
  )
  }
  return Hoc;

}
export default PagesHoc;
