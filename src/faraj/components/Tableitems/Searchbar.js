import React from "react";
import { TextField } from "@mui/material";
import './Searchbar.css';
const Searchbar = (props) => {
  return (
    <div className="input-group input-group-lg d-flex justify-content-center" >
    <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
    <input type="text" className="form-control" onChange={e=>props.search(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  </div>
  );
}

export default Searchbar;