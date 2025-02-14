import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ArrayDemo1 from './components/ArrayDemo1'
import ArrayDemo2 from './components/ArrayDemo2'
import ArrayDemo3 from './components/ArrayDemo3'
import ArrayDemo4 from './components/ArrayDemo4'
import SalesData from './components/ArrayDemo5'
import ArrayDemo5 from './components/ArrayDemo5'
import ArrayDemo6 from './components/ArrayDemo6'
import {UseStateDemo1} from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import InputDemo2 from './components/Admin'
import InputDemo1 from './components/InputDemo1'
import Movie from './components/Movie'
import NavbarLink from './components/NavbarLink'
import { Route, Routes } from 'react-router-dom'
import Hotstarhome from './components/hostar/Hotstarhome'
import HotstarMovie from './components/hostar/HotstarMovie'
import HotstarWelcome from './components/hostar/HotstarWelcome'
import Error404 from './components/hostar/Error404'
import Play from './components/hostar/Play'
import { FormDemo1}  from './components/form/FormDemo1.jsx'
import FormDemo2 from './components/form/FormDemo2.jsx'
import FormDemo3 from './components/form/FormDemo3.jsx'
import FormDemo4 from './components/form/FormDemo4.jsx'
import FormDemo5 from './components/form/FormDemo5.jsx'
import FormDemo6 from './components/form/FormDemo6.jsx'
import FormDemo7 from './components/form/FormDemo7.jsx'
import FormDemo8 from './components/form/FormDemo8.jsx'
import { FormDemo5c } from './components/form/FormDemo5(c).jsx'
import { FormDemo6c } from './components/form/FormDemo6(c).jsx'


function App() {
  return (
      <div>
    <NavbarLink></NavbarLink>
      <Routes>
        <Route path='/home' element = {<Hotstarhome/>}></Route>
        <Route path='/movies' element = {<HotstarMovie/>}></Route>
        <Route path='/' element = {<HotstarWelcome/>}></Route>
        {/* <Route path='/error' element = {<Error404/>}></Route> */}
        <Route path='/*' element = {<Error404/>}></Route>
        <Route path='/play/:id' element = {<Play/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
        <Route path='/formdemo2' element = {<FormDemo2/>}></Route> 
        <Route path='/formdemo3' element = {<FormDemo3/>}></Route>
        <Route path='/formdemo4' element = {<FormDemo4/>}></Route>
        <Route path='/formdemo5' element = {<FormDemo5/>}></Route>
        <Route path='/formdemo6' element = {<FormDemo6/>}></Route>
        <Route path='/formdemo7' element = {<FormDemo7/>}></Route>
        <Route path='/formdemo8' element = {<FormDemo8/>}></Route>
        <Route path='/formdemo5c' element= {<FormDemo5c/>}></Route>
        <Route path='/formdemo6c' element= {<FormDemo6c/>}></Route>
      </Routes>
    
  </div>
   
  )
}

export default App
