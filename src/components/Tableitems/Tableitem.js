import React from 'react'
import Tabledata from './Tabledata';
import './tableitem.css'
import quest from '../question.json'
  
  
  export default function Table(props) {
      document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
      let que=quest.filter((auto)=>auto.Title.includes(props.title) && auto.Type.includes(props.type) && auto.Url.includes(props.searc));
      return (
    <>
    <div className={`table-${props.mode} `}>
   
        <h1 className={`difficulty-${props.mode} `}>. {props.type}</h1>
        <div className={`questionlinks-${props.mode}`}>
        <table className="table ">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Q-ID</th>
      <th scope="col">Questions</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
     { que.map((element)=>{
          return <Tabledata  QID={element.id} question={element.Url} />
      })
      
    }
  </tbody>
</table>
        </div>
    </div>   
    </>
  )
}