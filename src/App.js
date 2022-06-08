import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/Cards/Card';
import Mode from './components/Mode/Mode';
import About from './components/About/About';
import { useState } from 'react';

 




function App() {

const [mode,setMode]=useState("dark")

const changeMode=()=>{
  if(mode==="dark")
  setMode("light");
  else if(mode==="light")
  setMode("dark");

}

  return (
    <>
    <Navbar mode={mode}/>
    <Mode mode={mode} changeMode={changeMode}/>
    <About mode={mode} />
    <Card  mode={mode}/>
    </>
  );
}

export default App;
