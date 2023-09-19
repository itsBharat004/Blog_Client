import React,{useContext} from 'react'
// import { NewsData } from './Assets/NewsData'
import { dataa } from './Assets/Context';
import Stories from './GenericComonents/Stories';
import ErrorHandler from '../Pages/ErrorHandler'
function FilterStoriesData(props) {
  const data=useContext(dataa)[props.id-1];
//  console.log(props)
//   console.log("nic",data.heading,props.type)
 if(props.type==="type2"){//LatestStories
    return   <Stories  id={props.id} type={props.type} heading={data.heading} description={data.description} descriptionLength={'47'} date={data.date} categories={data.categories}/>

}else if(props.type==="type3"){//the latest
    return   <Stories id={props.id} type={props.type} images={data.images} heading={data.heading} description={data.description} descriptionLength={'15'} date={data.date} categories={data.categories}/>
        

}else if(props.type==="type4"){//top stories
    return   <Stories id={props.id} type={props.type} images={data.images} heading={data.heading} description={data.description} descriptionLength={'9'} date={data.date} categories={data.categories}/>


}else if(props.type==="type5"){//top post
    return   <Stories id={props.id} type={props.type} counter={props?.counter} images={data.images} heading={data.heading} date={data.date} categories={data.categories}/>


}else if(props.type==="type6"){ //moreFromSiren
    return   <Stories id={props.id} type={props.type} images={data.images} heading={data.heading} categories={data.categories}/>

}
else{
    return  <ErrorHandler/>


}
}
export default FilterStoriesData