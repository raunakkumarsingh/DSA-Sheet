import React from 'react'
import Tabledata from './Tabledata';
import './tableitem.css'
import quest from '../question.json'
  
  
  export default function Table(props) {
      document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
      console.log(props.title)
      // console.log(props.type)
      // console.log(props.searc)
      let que=quest.filter((auto)=>auto.Day.includes(props.title)&& auto.Url.includes(props.searc));

      return (
    <>
    <div className={`table-${props.mode} `}>
   
        <h1 className={`difficulty-${props.mode} `}>. {props.type}</h1>
        <div className={`questionlinks-${props.mode}`}>
        <table className="table">
  <thead>
    <tr className={`headings-${props.mode} `}>
      <th scope="col">#</th>
      <th scope="col">Q-ID</th>
      <th scope="col">Questions</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
     { que.map((element)=>{
          return <Tabledata  mode={props.mode} QID={element.id} key={element.id} question={element.Name} Url={element.Url}/>
      })
    }
  </tbody>
</table>
        </div>
    </div>   
    </>
  )
}