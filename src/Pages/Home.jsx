import React from 'react'
import HeaderImage from '../Components/ImageBar/HeaderImage'
import './HomeStyle.css'
import Navbar from '../Components/Header/Navbar'
import LatestArticle from '../Components/Sections/LatestArticle'
import TheLatest from '../Components/Sections/TheLatest'
import LatestStories from '../Components/Sections/LatestStories'
import TopPost from '../Components/Sections/TopPost'
import Context from '../Components/Assets/Context'
function Home() {

  return (

 <>
 <Context/>
    <Navbar/>
<HeaderImage/>
<div className="upper">
<h1>The Latest</h1>
<TheLatest/>

</div>
  <div className="mid">
<div className="midFirst">
  
<LatestArticle />


</div>
<div className="midSecond">
<h1> TopPost</h1>
<div className='TopPost TopPostHome'>
<iframe className='adv' src="https://www.youtube.com/embed/cgmcVz0VBDM?autoplay=1&mute=1" style={{marginRight:"10px"} }height={550} allow='autoplay;' title='video'></iframe>

{/* <img className="adv" style={{objectFit:"cover" ,height:"550px"}} alt="not found"src="https://mediasamosa.com/wp-content/uploads/2020/01/printad-696x985.jpg"/> */}
<TopPost isHome={true} initialIds={1}/>

</div>
</div>
  </div>
  <div className="bottom">
<LatestStories/>
  </div>

 </>
  )
}

export default Home