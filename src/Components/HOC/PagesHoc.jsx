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
<img style={{objectFit:"cover" ,height:"400px",width:"100%"}} alt="not found"src="https://i.pinimg.com/564x/55/e6/6f/55e66fa95faf90b485678f8f9da1b487.jpg"/>
{/* <img className="adv" style={{objectFit:"cover" ,height:"300px",width:"100%"}} alt="not found"src="https://cdn.dribbble.com/users/2053153/screenshots/6127364/mcdonaldsad_1551722682294.png"/> */}

</div>
    </div>
</>
  )
  }
  return Hoc;

}
export default PagesHoc;
