import React from 'react';
import './CardComponent.css';
import achivement from "../CardComponent/achivement.png";
import { Chart } from "react-google-charts";
import { color } from '@chakra-ui/react';
import { Margin, Padding } from '@mui/icons-material';
import { ReactComponent as DeleteIcon } from './delete.svg';
import { Link } from 'react-router-dom';



function CardComponent({ name, title, rating, maxRating, activeDays, totalSolved, easy, medium, hard,tag,overall_coding_score,college_rank ,mode, handleDelete}) {

  const data = [
    ["questions", "no of questions"],
    ["Easy", easy],
    ["medium", medium],
    ["Hard", hard],
  ];

  const options = {
    pieHole: 0.4, // Makes it a donut chart
    backgroundColor: 'transparent', // Sets the background to transparent
    slices: {
      0: { offset: 0.1 },
      1: { offset: 0.1 },
      2: { offset: 0.1 }
    },
   
    legend: {
      position: 'top',
      alignment: 'center',
      textStyle: {
        color: mode === "dark" ? "white" : "black",
        fontSize: 12,
      },
      
      Margin:200
    },
    
    pieStartAngle: 140,

    
    tooltip: { trigger: 'selection' },
    chartArea: {
      top: 53, 
     
    }
  };
  return (
    <div className={`card-component ${name} mx-auto my-auto`}>
      <div className="card-component__row">
        <div className="card-component__body">
       
          <h3 className="card-component__title">{title} <a onClick={(e) => handleDelete(e, title)} className='delete' ><DeleteIcon/></a> </h3>
          <p className={`card-component__text-${mode}`}>Questions Solved: {totalSolved}</p>


          {title === "GFG" && (
      <>
        <p className={`card-component__text-${mode}`}>Coding score:{overall_coding_score}</p>
        <p className={`card-component__text-${mode}`}>College rank:{college_rank}</p>
       
      </>
    )}
    {title === "Leetcode" && (
      <>
         <p className={`card-component__text-${mode}`}>Contests: {activeDays}</p>
        <p className={`card-component__text-${mode}`}>Rating: {rating}</p>
  
      </>
    )}
    {title === "Codeforces" && (
      <>
         <p className={`card-component__text-${mode}`}>Contests: {activeDays}</p>
        <p className={`card-component__text-${mode}`}>{tag}</p>
       
        </>
    )}
    {title === "Codechef" && (
      <>
         <p className={`card-component__text-${mode}`}>Contests: {activeDays}</p>
        <p className={`card-component__text-${mode}`}>Stars: {tag}</p>
      
        
      </>
    )}
        </div>
        {title === "GFG" || title ==="Leetcode" ? (
          <div className="card-component__image-section">
            <div className="ring-container">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"300px"}
                height={"190px"}
            
              />
            </div>
          </div>
        ) : (
          <div className={`card-component__image-section img-section`}>
            <p className={`card-component__subtitle-${mode}`}>Contest Rating</p>
            <img
              src={achivement}
              className="card-component__image"
              alt="Achievement"
            />
            <p className={`card-component__rating`}>{rating}</p>
            <p className={`card-component__max-rating-${mode}`}>Max: {maxRating}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardComponent;
