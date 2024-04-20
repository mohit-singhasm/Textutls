import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const [btnclr, setbtnclr] = useState('primary')

  const showAlter = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#404851'
      showAlter('Dark Mode is enabled', 'success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = '#ffffff'
      showAlter('Light Mode is enabled' , 'success')
    }
  }

  
  const colorPalet = (id) => {
    if(id == 1){
      setmode('dark')
      document.body.style.backgroundColor = '#003e98'
      showAlter('Blue Dark Mode is enabled', 'success')
      setbtnclr('primary')
      // console.log('btn is clicked')
    }
    else if(id == 2){
      setmode('dark')
      document.body.style.backgroundColor = '#045004'
      showAlter('Green Dark Mode is enabled', 'success')
      setbtnclr('success')
      // console.log('red is clicked')
    }
    else if(id == 3){
      setmode('dark')
      document.body.style.backgroundColor = '#760c0c'
      showAlter('Red Dark Mode is enabled', 'success')
      setbtnclr('danger')
      // console.log('green is clicked')
    }
    else if(id == 4){
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlter('Grey Dark Mode is enabled', 'success')
      setbtnclr('secondary')
      // document.getElementsByClassName('mat').style.backgroundColor = '#6c6e71'
      // document.getElementsByClassName('mat').style.color = '#fff'
      // console.log('grey is clicked')
    }
    else{
      console.log('unknown button is clicked')
    }
  }

  return (
    <BrowserRouter>
      <Navbar title='Testutls' moreInfo='About Us' mode={mode} toggleMode={toggleMode} colorPalet={colorPalet}/>
      {/* <Navbar title ={3} /> */}
      <Alert alert = {alert} />
      {/* <TextForm heading = "Enter your text to analyze" mode={mode} showAlter={showAlter} btnclr={btnclr}/>  */}
      {/* <About/> */}
      <Routes>
        <Route exact path='/' element={<TextForm heading = "Enter your text to analyze" mode={mode} showAlter={showAlter} btnclr={btnclr}/>} />
        <Route exact path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
