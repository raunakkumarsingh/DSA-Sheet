import React, { useContext, useEffect, useState } from 'react';
// import './tableitem.css';
import quest from './question.json';
import dataContext from '../context/datacontext';

export default function Table(props) {
  document.body.style = props.mode === "light" ? "background:white" : "background:#0E1C25";

  let que =quest[`${props.title}`] || [];
  console.log(que);

  return (
    <>
      <div className={`table-${props.mode}`}>
        <div className={`questionlinks-${props.mode}`}>
          <table className="table">
            <thead>
              <tr className={`headings-${props.mode}`}>
                <th scope="col">#</th>
                <th scope="col">Q-ID</th>
                <th scope="col">Questions</th>
                <th scope="col">Solutions</th>
              </tr>
            </thead>
            <tbody>
              {que.map((element) => {
                return <TableRow mode={props.mode} Solution={element.solution_URL} Rating={props.title} QID={element.id} key={element.id} question={element.question} Url={element.URL} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function TableRow(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const context = useContext(dataContext);
  const { updateDataCp, deleteDataCp, showAlert,getDataCp} = context;
  const ques = JSON.parse(localStorage.getItem('ratingData'));

  const isQIDInLocalStorage = (rating, QID) => {
    const storedDataJSON = localStorage.getItem('ratingData');
    if (!storedDataJSON) {
      return false;
    }
    const storedData = JSON.parse(storedDataJSON);
    if (storedData[rating]) {
      return storedData[rating].includes(QID);
    }
    return false;
  };
  let check = isQIDInLocalStorage(props.Rating, props.QID);

  useEffect(() => {
    setIsChecked(check);
  }, [check]);

  const updateDATA = async () => {
    const storedDataJSON = localStorage.getItem('ratingData');
    // console.log("storedDataJSON.error ##",storedDataJSON)
    
    const storedData = JSON.parse(storedDataJSON);
    if (!storedData) return;
    if (storedData[props.Rating]) {
        if (!storedData[props.Rating].includes(props.QID)) {
            storedData[props.Rating].push(props.QID);
        }
    } else {
        storedData[props.Rating] = [props.QID];
    }
    localStorage.setItem('cpProgress', JSON.parse(localStorage.getItem('cpProgress'))+1);
    console.log(localStorage.getItem('cpProgress'));
    localStorage.setItem('ratingData', JSON.stringify(storedData));
    if(!storedDataJSON){
      getDataCp();}
  };
  
  const deleteDATA = async () => {
    const storedDataJSON = localStorage.getItem('ratingData');
    const storedData = JSON.parse(storedDataJSON);
    if (!storedData) return;
    if (storedData[props.Rating]) {
      storedData[props.Rating] = storedData[props.Rating].filter(id => id !== props.QID);
      if (storedData[props.Rating].length === 0) {
        delete storedData[props.Rating];
      }
    }
    localStorage.setItem('cpProgress', JSON.parse(localStorage.getItem('cpProgress'))-1);
    localStorage.setItem('ratingData', JSON.stringify(storedData));
};

const toggle = async (e) => {
    setLoader(true);
    if (isChecked) {
      if(localStorage.getItem('token')!=="hello")
        await deleteDataCp(ques.email, props.Rating, props.QID);
        await deleteDATA();
        setIsChecked(false);
        showAlert("deselect", "Question Deselected 👾");
    } else {
      if(localStorage.getItem('token')!=="hello")
        await updateDataCp(ques.email, props.Rating, props.QID);
        await updateDATA();
        setIsChecked(true);
        showAlert("success", "Question Completed Successfully 🎉🎊");
    }
    setLoader(false);
};

  return (
    <>
      <tr className={`table-${props.mode}-${isChecked}`}>
        <th scope="row">
          {loader ? (
            <span className="spinner-border spinner-border-sm my-1 text-primary" role="status" aria-hidden="true"></span>
          ) : (
            <input className="donebox" name={props.QID} onChange={toggle} type="checkbox" checked={isChecked}></input>
          )}
        </th>
        <th className={`questionname data-${props.mode}-${isChecked}`}>{props.QID}</th>
        <th><a target="_blank" href={props.Url} className={`questionname data-${props.mode}-${isChecked}`}>{props.question}</a></th>
        <th><a target="_blank" href={props.Solution} className={`questionname data-${props.mode}-${isChecked}`}>{props.Solution === "#" ? "" : "Solution"}</a></th>
      </tr>
    </>
  );
}
