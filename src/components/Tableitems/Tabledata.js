import React from 'react'
import './tabledata.css'

export default function Tabledata(props) {
  return (
    <>
    <tr>
      <th scope="row"><input className="donebox" type="checkbox"></input></th>
      <th >{props.QID}</th>
      <th><a href={props.question}>{props.question}</a></th>
      
    </tr>
    </>
  )
}
