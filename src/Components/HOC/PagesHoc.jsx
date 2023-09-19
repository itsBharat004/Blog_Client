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
<img className="adv" style={{objectFit:"contain" ,height:"300px"}} alt="not found"src="https://cdn.dribbble.com/users/2053153/screenshots/6127364/mcdonaldsad_1551722682294.png"/>

</div>
    </div>
</>
  )
  }
  return Hoc;

}
export default PagesHoc;
