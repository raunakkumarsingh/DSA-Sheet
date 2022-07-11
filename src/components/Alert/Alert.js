import React from 'react'
import dataContext from '../../context/datacontext';
import { useContext } from 'react';
import '../Alert/Alert.css'

function Alert() {
    const context=useContext(dataContext);
    const {alert}=context;

    
      

    // easing: 'spring(1, 80, 10, 0)'
console.log(alert)

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className='.animealert' >
      {
        alert && <div style={{height: '20px'}}>
         <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(alert.type)=="Success"?"Success":"Error"}</strong>: {alert.msg} 
        </div>
        </div>
      }
        </div>
    
        )
    }

export default Alert