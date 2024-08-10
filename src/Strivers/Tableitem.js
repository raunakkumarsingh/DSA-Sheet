import React, { useContext, useEffect, useState } from 'react';
// import './tableitem.css';
import quest from './question.json';
import dataContext from '../context/datacontext';

export default function Table(props) {
  document.body.style = props.mode === "light" ? "background:white" : "background:#0E1C25";

  let que = quest.filter((auto) => auto.Day === props.title && auto.Title.includes(props.searc));

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
                return <TableRow mode={props.mode} Solution={element.Solution} QID={element.id} key={element.id} question={element.Title} Url={element.Url} />
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
  const { updateDataStriver, deleteDataStriver, showAlert } = context;
  const ques = JSON.parse(localStorage.getItem("quesStriver"));

  let check = JSON.parse(localStorage.getItem('striverArray')).includes(props.QID);

  useEffect(() => {
    setIsChecked(check);
  }, [check]);

  const updateDATA = async () => {
    let localData = await JSON.parse(localStorage.getItem("striverArray"));
    const len = localData.length;
    if (localData[len - 1] !== props.QID) {
      localData.push(props.QID);
    }
    localStorage.setItem("striverArray", JSON.stringify(localData));
    localStorage.setItem("striverProgress", len + 1);
  };

  const deleteDATA = async () => {
    let localData = await JSON.parse(localStorage.getItem("striverArray"));
    const len = localStorage.getItem("striverProgress");

    if (localData[len - 1] === props.id) {
      await localData.splice(len - 1, 1);
      localStorage.setItem("striverProgress", len - 1);
    } else if (localData[len - 2] === props.id) {
      await localData.splice(len - 2, 1);
      localStorage.setItem("striverProgress", len - 1);
    } else {
      for (let i = 0; i < len; i++) {
        if (localData[i] === props.QID) {
          await localData.splice(i, 1);
          localStorage.setItem("striverProgress", len - 1);
          break;
        }
      }
    }
    localStorage.setItem("striverArray", JSON.stringify(localData));
  };

  const toggle = async (e) => {
    if (isChecked) {
      setLoader(true);
      await deleteDataStriver(ques._id, ques.email, props.QID);
      setIsChecked(false);
      showAlert("deselect", "Question Deselected 👾");
      setLoader(false);
      await deleteDATA();
    } else if (!isChecked) {
      setLoader(true);
      await updateDataStriver(ques._id, ques.email, props.QID);
      setLoader(false);
      showAlert("success", "Question Completed Successfully 🎉🎊");
      setIsChecked(true);
      await updateDATA();
    }
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
