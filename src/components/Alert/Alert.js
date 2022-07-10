import React from 'react'
import anime from 'animejs/lib/anime.es.js';
import dataContext from '../../context/datacontext';
import { useContext } from 'react';

function Alert() {
    const context=useContext(dataContext);
    const {alert}=context;

    var animation = anime({
        targets: '.animealert',
        translateX: 270,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        autoplay: true
      });
      
      function loop(t) {
        animation.tick(t);
        // customRAF = requestAnimationFrame(loop);
      }
      
      requestAnimationFrame(loop);
    // easing: 'spring(1, 80, 10, 0)'
console.log(alert)

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
       

      {  alert && <div className='animealert' style={{height: '50px',width:'30rem'}}>
         <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(alert.type)}</strong>: {alert.msg} 
        </div>
        </div>}
        </>
    
        )
    }

export default Alert