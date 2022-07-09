import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/Cards/Card';
import Mode from './components/Mode/Mode';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Table from './components/Table/Table';
import Login from './components/Login/Login';
import { Heading } from '@chakra-ui/react';
import Signup from './components/Signup/Signup';
import { useNavigate } from 'react-router-dom';
import NoteState from './context/DataState'
import Alert from './components/Alert/Alert';


  

function App() {


  
  const [mode,setMode]=useState("dark");
  const [titl,setTitle]=useState("Array");
  
  // setTitle(tit);
  // let history=useNavigate();
  // if(!localStorage.getItem('token')){
  //   history('/login')
  // }

  
 

const changeMode=()=>{
  if(mode==="dark"){
    setMode("light");
  }
  else if(mode==="light"){
  setMode("dark");
  }
}
return (
  <NoteState>

  <Router>
      <Navbar mode={mode}/>
      <Alert mode={mode}/>
      <Mode mode={mode} changeMode={changeMode}/>
      
      <Routes>
    <Route exact path='/' element={<Card key="0" mode={mode} />}/>
    <Route exact path='/Faraj-Sheet' element={<Card key="0" mode={mode} />}/>
    <Route exact path="/Array" element={<Table key="1" mode={mode} title="Array"/>}/>
    <Route exact path="/Segment%20Tree" element={<Table key="2" mode={mode} title="Segment Tree"/>}/>
    <Route exact path="/Math" element={<Table key="3" mode={mode} title="Math"/>}/>
    <Route exact path="/DFS" element={<Table key="4" mode={mode} title="DFS"/>}/>
    <Route exact path="/Dynamic%20Programing" element={<Table key="5" mode={mode} title="Dynamic Programing" />}/>
    <Route exact path="/BackTracking" element={<Table key="6" mode={mode} title="BackTracking" />}/>
    <Route exact path="/Hash%20Table" element={<Table key="7" mode={mode} title="Hash Table" />}/>
    <Route exact path="/Binary%20Search" element={<Table key="8" mode={mode} title="Binary Search"/>}/>
    <Route exact path="/Two%20Pointer" element={<Table key="9" mode={mode} title="Two Pointer" />}/>
    <Route exact path="/Stack" element={<Table key="10" mode={mode} title="Stack"/>}/>
    <Route exact path="/Design" element={<Table key="11" mode={mode} title="Design"/>}/>
    <Route exact path="/data" element={<Table key="12" mode={mode} title="Data"/>}/>
    <Route exact path="/Bit%20Manipulation" element={<Table key="13" mode={mode} title="Bit Manipulation"/>}/>
    <Route exact path="/Linklist" element={<Table key="14" mode={mode} title="Linklist"/>}/>
    <Route exact path="/Heap" element={<Table key="15" mode={mode} title="Heap"/>}/>
    <Route exact path="/String" element={<Table key="16" mode={mode} title="String"/>}/>
    <Route exact path="/Tree" element={<Table key="17" mode={mode} title="Tree"/>}/>
    <Route exact path="/Trie" element={<Table key="18" mode={mode} title="Trie"/>}/>
        <Route exact path="/login" element={<Login mode={mode}/>}/>
        <Route exact path="/signup" element={<Signup mode={mode}/>}/>
    </Routes>
      
    </Router>
  </NoteState>
  );
}

export default App;
