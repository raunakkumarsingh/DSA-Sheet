import React from "react";
import { TextField } from "@mui/material";
import './Searchbar.css';
const Searchbar = (props) => {
  return (
    <div class="input-group input-group-lg d-flex justify-content-center" >
    <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
    <input type="text" class="form-control" onChange={e=>props.search(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
  </div>
  );
}

export default Searchbar;