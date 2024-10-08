import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';

// General Imports
import Navbar from './components/navbar/Navbar';
import Mode from './components/Mode/Mode';
import Login from './components/Login/Login';
import Forget from './components/ForgetPassword/Forget';
import Signup from './components/Signup/Signup';
import Alert from './components/Alert/Alert';
import Home from './components/Home/Home';
import NoteState from './context/DataState';
import Dashboard from './Dashboard/Dashboard';

// Faraj Sheet Imports
import Cardf from './faraj/Card';
import Tablef from './faraj/Table';

// LoveDSA Imports
import Cardl from './LoveDSA/Card';
import Tablel from './LoveDSA/Table';

// Striver Sheet Imports
import Cards from './Strivers/Card';
import Tables from './Strivers/Table';

// CP sheet Imports
import Cardc from './CPsheet/Card';
import Tablec from './CPsheet/Table';

function App() {
  const [mode, setMode] = useState("dark");

  const changeMode = () => {
    setMode(prevMode => prevMode === "dark" ? "light" : "dark");
  };

  useEffect(()=>{
    document.body.style.zoom = '100%';
    document.body.style.background = mode === "light" ? "white" : "#0E1C25";
  },[])

  return (
    <NoteState>
      <Router>
        <Navbar mode={mode} />
        <Alert mode={mode} />
        <Mode mode={mode} changeMode={changeMode} />

        <Routes>
          {/* Home Route */}
          <Route exact path='/' element={<Dashboard mode={mode} />} />
          <Route exact path='/sheet' element={<Home mode={mode} />} />
          <Route exact path='/dashboard' element={<Dashboard mode={mode} />} />
          {/* Faraj Sheet Routes */}
          <Route exact path='/fraz' element={<Cardf mode={mode} />} />
          <Route exact path="/fraz/Array" element={<Tablef mode={mode} title="Array" />} />
          <Route exact path="/fraz/Segment%20Tree" element={<Tablef mode={mode} title="Segment Tree" />} />
          <Route exact path="/fraz/Math" element={<Tablef mode={mode} title="Math" />} />
          <Route exact path="/fraz/DFS" element={<Tablef mode={mode} title="DFS" />} />
          <Route exact path="/fraz/Dynamic%20Programming" element={<Tablef mode={mode} title="Dynamic Programming" />} />
          <Route exact path="/fraz/BackTracking" element={<Tablef mode={mode} title="BackTracking" />} />
          <Route exact path="/fraz/Hash%20Table" element={<Tablef mode={mode} title="Hash Table" />} />
          <Route exact path="/fraz/Binary%20Search" element={<Tablef mode={mode} title="Binary Search" />} />
          <Route exact path="/fraz/Two%20Pointer" element={<Tablef mode={mode} title="Two Pointer" />} />
          <Route exact path="/fraz/Stack" element={<Tablef mode={mode} title="Stack" />} />
          <Route exact path="/fraz/Design" element={<Tablef mode={mode} title="Design" />} />
          <Route exact path="/fraz/data" element={<Tablef mode={mode} title="Data" />} />
          <Route exact path="/fraz/Bit%20Manipulation" element={<Tablef mode={mode} title="Bit Manipulation" />} />
          <Route exact path="/fraz/Linked%20List" element={<Tablef mode={mode} title="Linked List" />} />
          <Route exact path="/fraz/Heap" element={<Tablef mode={mode} title="Heap" />} />
          <Route exact path="/fraz/String" element={<Tablef mode={mode} title="String" />} />
          <Route exact path="/fraz/Tree" element={<Tablef mode={mode} title="Tree" />} />
          <Route exact path="/fraz/Trie" element={<Tablef mode={mode} title="Trie" />} />
          <Route exact path="/fraz/BFS" element={<Tablef mode={mode} title="BFS" />} />
          <Route exact path="/fraz/Graph" element={<Tablef mode={mode} title="Graph" />} />
          <Route exact path="/fraz/Sliding%20Window" element={<Tablef mode={mode} title="Sliding Window" />} />

          {/* LoveDSA Routes */}
          <Route exact path='/450DSA' element={<Cardl mode={mode} />} />
          <Route exact path="/450DSA/Array" element={<Tablel mode={mode} title="Array" />} />
          <Route exact path="/450DSA/Matrix" element={<Tablel mode={mode} title="Matrix" />} />
          <Route exact path="/450DSA/String" element={<Tablel mode={mode} title="String" />} />
          <Route exact path="/450DSA/Search%20&%20Sort" element={<Tablel mode={mode} title="Search & Sort" />} />
          <Route exact path="/450DSA/LinkedList" element={<Tablel mode={mode} title="LinkedList" />} />
          <Route exact path="/450DSA/Binary%20Trees" element={<Tablel mode={mode} title="Binary Trees" />} />
          <Route exact path="/450DSA/BST" element={<Tablel mode={mode} title="BST" />} />
          <Route exact path="/450DSA/Greedy" element={<Tablel mode={mode} title="Greedy" />} />
          <Route exact path="/450DSA/BackTracking" element={<Tablel mode={mode} title="BackTracking" />} />
          <Route exact path="/450DSA/Stacks%20&%20Queues" element={<Tablel mode={mode} title="Stacks & Queues" />} />
          <Route exact path="/450DSA/Heap" element={<Tablel mode={mode} title="Heap" />} />
          <Route exact path="/450DSA/Graph" element={<Tablel mode={mode} title="Graph" />} />
          <Route exact path="/450DSA/Trie" element={<Tablel mode={mode} title="Trie" />} />
          <Route exact path="/450DSA/Dynamic%20Programming" element={<Tablel mode={mode} title="Dynamic Programming" />} />
          <Route exact path="/450DSA/Bit%20Manipulation" element={<Tablel mode={mode} title="Bit Manipulation" />} />

          {/* Striver Sheet Routes */}
          <Route exact path='/striver' element={<Cards mode={mode} />} />
          <Route exact path="/striver/day1" element={<Tables mode={mode} title="1" />} />
          <Route exact path="/striver/day2" element={<Tables mode={mode} title="2" />} />
          <Route exact path="/striver/day3" element={<Tables mode={mode} title="3" />} />
          <Route exact path="/striver/day4" element={<Tables mode={mode} title="4" />} />
          <Route exact path="/striver/day5" element={<Tables mode={mode} title="5" />} />
          <Route exact path="/striver/day6" element={<Tables mode={mode} title="6" />} />
          <Route exact path="/striver/day7" element={<Tables mode={mode} title="7" />} />
          <Route exact path="/striver/day8" element={<Tables mode={mode} title="8" />} />
          <Route exact path="/striver/day9" element={<Tables mode={mode} title="9" />} />
          <Route exact path="/striver/day10" element={<Tables mode={mode} title="10" />} />
          <Route exact path="/striver/day11" element={<Tables mode={mode} title="11" />} />
          <Route exact path="/striver/day12" element={<Tables mode={mode} title="12" />} />
          <Route exact path="/striver/day13" element={<Tables mode={mode} title="13" />} />
          <Route exact path="/striver/day14" element={<Tables mode={mode} title="14" />} />
          <Route exact path="/striver/day15" element={<Tables mode={mode} title="15" />} />
          <Route exact path="/striver/day16" element={<Tables mode={mode} title="16" />} />
          <Route exact path="/striver/day17" element={<Tables mode={mode} title="17" />} />
          <Route exact path="/striver/day18" element={<Tables mode={mode} title="18" />} />
          <Route exact path="/striver/day19" element={<Tables mode={mode} title="19" />} />
          <Route exact path="/striver/day20" element={<Tables mode={mode} title="20" />} />
          <Route exact path="/striver/day21" element={<Tables mode={mode} title="21" />} />
          <Route exact path="/striver/day22" element={<Tables mode={mode} title="22" />} />
          <Route exact path="/striver/day23" element={<Tables mode={mode} title="23" />} />
          <Route exact path="/striver/day24" element={<Tables mode={mode} title="24" />} />
          <Route exact path="/striver/day25" element={<Tables mode={mode} title="25" />} />
          <Route exact path="/striver/day26" element={<Tables mode={mode} title="26" />} />
          <Route exact path="/striver/day27" element={<Tables mode={mode} title="27" />} />
          <Route exact path="/striver/day28" element={<Tables mode={mode} title="28" />} />
          <Route exact path="/striver/day29" element={<Tables mode={mode} title="29" />} />
          <Route exact path="/striver/day30" element={<Tables mode={mode} title="30" />} />

          <Route exact path='/cpsheet' element={<Cardc mode={mode} />} />
          <Route exact path="/cpsheet/800" element={<Tablec mode={mode} title="800" />} />
          <Route exact path="/cpsheet/900" element={<Tablec mode={mode} title="900" />} />
          <Route exact path="/cpsheet/1000" element={<Tablec mode={mode} title="1000" />} />
          <Route exact path="/cpsheet/1100" element={<Tablec mode={mode} title="1100" />} />
          <Route exact path="/cpsheet/1200" element={<Tablec mode={mode} title="1200" />} />
          <Route exact path="/cpsheet/1300" element={<Tablec mode={mode} title="1300" />} />
          <Route exact path="/cpsheet/1400" element={<Tablec mode={mode} title="1400" />} />
          <Route exact path="/cpsheet/1500" element={<Tablec mode={mode} title="1500" />} />
          <Route exact path="/cpsheet/1600" element={<Tablec mode={mode} title="1600" />} />


          {/* Authentication Routes */}
          <Route exact path="/login" element={<Login mode={mode} />} />
          <Route exact path="/forget" element={<Forget mode={mode} />} />
          <Route exact path="/signup" element={<Signup mode={mode} />} />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
