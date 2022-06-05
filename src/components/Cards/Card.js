import React from 'react'
import Carditem from '../Carditems/Carditem'

let data=[{
  "source":{
    "id": 1
  },
  "Title": "Array",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "String",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Math",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Dynamic Programing",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "DFS",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "BackTracking",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Hash Table",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Tree",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Binary Search",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "BFS",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Two Pointer",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Stack",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Design",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Graph",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Graph",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Bit Manipulation",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Linklist",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Heap",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Sliding Window",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Tree",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Trie",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
},
{
  "source":{
    "id": 1
  },
  "Title": "Segment Tree",
  "Totalquestion": 43,
  "EasyQuestion":12,
  "MediumQuestion":26,
  "hardQuestion":5
}
];
// let parsedData=await data.json();
function Card() {
  return (
    <div className='container my-3'>
      <div className='row'>
          {  data.map((element)=>{
        return<div className='col-md-4 my-2'>
          <Carditem title={element.Title} TotalQuestion={element.Totalquestion} EasyQuestion={element.EasyQuestion} MediumQuestion={element.MediumQuestion} hardQuestion={element.hardQuestion}/>
        </div>
          })
          }


      </div>
     
      </div>
  )
}

export default Card
