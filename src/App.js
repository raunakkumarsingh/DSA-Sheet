import './App.css';

//general Import for all
import Navbar from './components/navbar/Navbar';
import Mode from './components/Mode/Mode';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Alert from './components/Alert/Alert';
import About from './components/About/About'
import Home from './components/Home/Home';
import NoteState from './context/DataState'
//faraj sheet import
import Cardf from './faraj/components/Cards/Card';
import Tablef from './faraj/components/Table/Table';
//LoveDSA Import
import Cardl from './LoveDSA/components/Cards/Card';
import Tablel from './LoveDSA/components/Table/Table';
//Striver SHEET Import
import Cards from './Strivers/components/Cards/Card';
import Tables from './Strivers/components/Table/Table';
//Normal react import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



  

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


        //Routes for faraj-sheet
    <Route exact path='/' element={<Home key="0" mode={mode} />}/>

    <Route exact path='/faraj' element={<Cardf key="0" mode={mode} />}/>
    {/* <Route exact path='/Faraj-Sheet' element={<Card key="0" mode={mode} />}/> */}
    <Route exact path="/faraj/Array" element={<Tablef key="1" mode={mode} title="Array"/>}/>
    <Route exact path="/faraj/Segment%20Tree" element={<Tablef key="2" mode={mode} title="Segment Tree"/>}/>
    <Route exact path="/faraj/Math" element={<Tablef key="3" mode={mode} title="Math"/>}/>
    <Route exact path="/faraj/DFS" element={<Tablef key="4" mode={mode} title="DFS"/>}/>
    <Route exact path="/faraj/Dynamic%20Programming" element={<Tablef key="5" mode={mode} title="Dynamic Programming" />}/>
    <Route exact path="/faraj/BackTracking" element={<Tablef key="6" mode={mode} title="BackTracking" />}/>
    <Route exact path="/faraj/Hash%20Table" element={<Tablef key="7" mode={mode} title="Hash Table" />}/>
    <Route exact path="/faraj/Binary%20Search" element={<Tablef key="8" mode={mode} title="Binary Search"/>}/>
    <Route exact path="/faraj/Two%20Pointer" element={<Tablef key="9" mode={mode} title="Two Pointer" />}/>
    <Route exact path="/faraj/Stack" element={<Tablef key="10" mode={mode} title="Stack"/>}/>
    <Route exact path="/faraj/Design" element={<Tablef key="11" mode={mode} title="Design"/>}/>
    <Route exact path="/faraj/data" element={<Tablef key="12" mode={mode} title="Data"/>}/>
    <Route exact path="/faraj/Bit%20Manipulation" element={<Tablef key="13" mode={mode} title="Bit Manipulation"/>}/>
    <Route exact path="/faraj/Linked%20List" element={<Tablef key="14" mode={mode} title="Linked List"/>}/>
    <Route exact path="/faraj/Heap" element={<Tablef key="15" mode={mode} title="Heap"/>}/>
    <Route exact path="/faraj/String" element={<Tablef key="16" mode={mode} title="String"/>}/>
    <Route exact path="/faraj/Tree" element={<Tablef key="17" mode={mode} title="Tree"/>}/>
    <Route exact path="/faraj/Trie" element={<Tablef key="18" mode={mode} title="Trie"/>}/>
    <Route exact path="/faraj/BFS" element={<Tablef key="19" mode={mode} title="BFS"/>}/>
    <Route exact path="/faraj/Graph" element={<Tablef key="20" mode={mode} title="Graph"/>}/>
    <Route exact path="/faraj/Sliding%20Window" element={<Tablef key="21" mode={mode} title="Sliding Window"/>}/>

    //Routes for LoveDSA
    <Route exact path='/450DSA' element={<Cardl key="0" mode={mode} />}/>
    <Route exact path="/450DSA/Array" element={<Tablel key="22" mode={mode} title="Array"/>}/>
    <Route exact path="/450DSA/Matrix" element={<Tablel key="23" mode={mode} title="Matrix"/>}/>
    <Route exact path="/450DSA/String" element={<Tablel key="24" mode={mode} title="String"/>}/>
    <Route exact path="/450DSA/Search%20&%20Sort" element={<Tablel key="25" mode={mode} title="Search & Sort"/>}/>
    <Route exact path="/450DSA/Linked%20List" element={<Tablel key="26" mode={mode} title="Linked List"/>}/>
    <Route exact path="/450DSA/Binary%20Trees" element={<Tablel key="27" mode={mode} title="Binary Trees" />}/>
    <Route exact path="/450DSA/BST" element={<Tablel key="28" mode={mode} title="BST" />}/>
    <Route exact path="/450DSA/Greedy" element={<Tablel key="29" mode={mode} title="Greedy"/>}/>
    <Route exact path="/450DSA/Backtracking" element={<Tablel key="30" mode={mode} title="Backtracking" />}/>
    <Route exact path="/450DSA/Stacks%20&%20Queues" element={<Tablel key="31" mode={mode} title="Stacks & Queues"/>}/>
    <Route exact path="/450DSA/Heap" element={<Tablel key="32" mode={mode} title="Heap"/>}/>
    <Route exact path="/450DSA/Graph" element={<Tablel key="33" mode={mode} title="Graph"/>}/>
    <Route exact path="/450DSA/Trie" element={<Tablel key="34" mode={mode} title="Trie"/>}/>
    <Route exact path="/450DSA/Dynamic%20Programming" element={<Tablel key="35" mode={mode} title="Dynamic Programming" />}/>
    <Route exact path="/450DSA/Bit%20Manipulation" element={<Tablel key="36" mode={mode} title="Bit Manipulation"/>}/>

          //Routes for Striver
           {/* <Route exact path="" element={<Table key="" mode={mode} title=""/>}/> */}
    <Route exact path='/striver' element={<Cards key="0" mode={mode} />}/>
    <Route exact path="/striver/day1" element={<Tables key="" mode={mode} title="1"/>}/>
    <Route exact path="/striver/day2" element={<Tables key="" mode={mode} title="2"/>}/>
    <Route exact path="/striver/day3" element={<Tables key="" mode={mode} title="3"/>}/>
    <Route exact path="/striver/day4" element={<Tables key="" mode={mode} title="4"/>}/>
    <Route exact path="/striver/day5" element={<Tables key="" mode={mode} title="5" />}/>
    <Route exact path="/striver/day6" element={<Tables key="" mode={mode} title="6" />}/>
    <Route exact path="/striver/day7" element={<Tables key="" mode={mode} title="7"/>}/>
    <Route exact path="/striver/day8" element={<Tables key="" mode={mode} title="8" />}/>
    <Route exact path="/striver/day9" element={<Tables key="" mode={mode} title="9"/>}/>
    <Route exact path="/striver/day10" element={<Tables key="" mode={mode} title="10"/>}/>
    <Route exact path="/striver/day11" element={<Tables key="" mode={mode} title="11"/>}/>
    <Route exact path="/striver/day12" element={<Tables key="" mode={mode} title="12"/>}/>
    <Route exact path="/striver/day13" element={<Tables key="" mode={mode} title="13" />}/>
    <Route exact path="/striver/day14" element={<Tables key="" mode={mode} title="14"/>}/>
    <Route exact path="/striver/day15" element={<Tables key="" mode={mode} title="15"/>}/>
    <Route exact path="/striver/day16" element={<Tables key="" mode={mode} title="16"/>}/>
    <Route exact path="/striver/day17" element={<Tables key="" mode={mode} title="17"/>}/>
    <Route exact path="/striver/day18" element={<Tables key="" mode={mode} title="18"/>}/>
    <Route exact path="/striver/day19" element={<Tables key="" mode={mode} title="19" />}/>
    <Route exact path="/striver/day20" element={<Tables key="" mode={mode} title="20" />}/>
    <Route exact path="/striver/day21" element={<Tables key="" mode={mode} title="21"/>}/>
    <Route exact path="/striver/day22" element={<Tables key="" mode={mode} title="22" />}/>
    <Route exact path="/striver/day23" element={<Tables key="" mode={mode} title="23"/>}/>
    <Route exact path="/striver/day24" element={<Tables key="" mode={mode} title="24"/>}/>
    <Route exact path="/striver/day25" element={<Tables key="" mode={mode} title="25"/>}/>
    <Route exact path="/striver/day26" element={<Tables key="" mode={mode} title="26"/>}/>
    <Route exact path="/striver/day27" element={<Tables key="" mode={mode} title="27" />}/>
    <Route exact path="/striver/day28" element={<Tables key="" mode={mode} title="28"/>}/>
    <Route exact path="/striver/day29" element={<Tables key="" mode={mode} title="29" />}/>
    <Route exact path="/striver/day30" element={<Tables key="" mode={mode} title="30"/>}/>



        <Route exact path="/login" element={<Login mode={mode}/>}/>
        <Route exact path="/signup" element={<Signup mode={mode}/>}/>
    </Routes>
      
    </Router>
  </NoteState>
  );
}

export default App;
