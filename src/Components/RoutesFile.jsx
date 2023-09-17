import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ErrorHandler from '../Pages/ErrorHandler';
import Home from '../Pages/Home';
import Bollywood from '../Pages/Bollywood';
import Hollywood from '../Pages/Hollywood';
import Technology from '../Pages/Technology';
import Fitness from '../Pages/Fitness';
import Food from '../Pages/Food';
import SingleArtical from './GenericComonents/SingleArtical';
import Login from './Login&signUp/Login';
import Register from './Login&signUp/Register';
const RoutesFile=()=>{
return(
    <>
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Bollywood' element={<Bollywood initialIds={1} name={'Bollywood'}/>}/>
        <Route path='/Hollywood' element={<Hollywood initialIds={16} name={'Hollywood'}/>}/>
        <Route path='/Technology' element={<Technology initialIds={31} name={'Technology'}/>}/>
        <Route path='/Fitness' element={<Fitness initialIds={46} name={'Fitness'}/>}/>
        <Route path='/Food' element={<Food initialIds={61} name={'Food'}/>}/>
        {/* login signup */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        {/* dynamic routing to singleArical page */}
        <Route path='/:NewsId' element={<SingleArtical/>}/>
        <Route path='/Bollywood/:NewsId' element={<SingleArtical/>}/>
        <Route path='/Hollywood/:NewsId' element={<SingleArtical/>}/>
        <Route path='/Technology/:NewsId' element={<SingleArtical/>}/>
        <Route path='/Fitness/:NewsId' element={<SingleArtical/>}/>
        <Route path='/Food/:NewsId' element={<SingleArtical/>}/>

        {/* error handler page */}
        <Route path='*' element={<ErrorHandler/>}/>
    </Routes>
    </>
);
}
export default RoutesFile;