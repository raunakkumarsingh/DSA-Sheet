import React from 'react'
import Tableitem from '../Tableitems/Tableitem';
import './Table.css'
import data from  '../data.json'




export default function Table(props) {
  document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
  console.log(props.title);
  let parseddata =data.filter((auto)=> auto.Title.includes(props.title));
  console.log(parseddata);
  // console.log(parseddata[0].EasyQuestion);
  return (
    <>
     <h1 className={`tableheading-${props.mode} `}>{props.title}</h1>
    
     {parseddata.map((element) => {
   
       if(element.EasyQuestion && element.MediumQuestion && element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(!element.EasyQuestion && element.MediumQuestion && element.hardQuestion)
       return <>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(element.EasyQuestion && !element.MediumQuestion && element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(element.EasyQuestion && element.MediumQuestion && !element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        </>
      else if(element.EasyQuestion && !element.MediumQuestion && !element.hardQuestion)
       return <><Tableitem mode={props.mode} type="Easy"  title={props.title}/>
        </>
      else if(!element.EasyQuestion && element.MediumQuestion && !element.hardQuestion)
       return <>
        <Tableitem mode={props.mode} type="Medium" title={props.title} />
        </>
      else if(!element.EasyQuestion && !element.MediumQuestion && element.hardQuestion)
       return <>
        <Tableitem mode={props.mode} type="Hard" title={props.title} />
        </>
      else if(!element.EasyQuestion && !element.MediumQuestion && !element.hardQuestion)
       return <>
        </>
   

     
  
       
          })}
    
    </>
  )
}