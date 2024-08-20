import React, { useContext, useEffect, useRef, useState } from 'react';
// import './tableitem.css';
import dataContext from '../context/datacontext';
import quest from './question.json';

export default function Table({ mode, title, type, searc }) {
  // Apply background color based on mode
  document.body.style = mode === "light" ? "background:white" : "background:#0E1C25";

  // Filter questions based on title and search query
  const filteredQuestions = quest.filter(q => q.Title.includes(title) && q.Url.includes(searc));

  return (
    <div className={`table-${mode}`}>
      <div className={`questionlinks-${mode}`}>
        <table className="table">
          <thead>
            <tr className={`headings-${mode}`}>
              <th scope="col">#</th>
              <th scope="col">Q-ID</th>
              <th scope="col">Questions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map((element, index) => (
              <Tabledata
                key={element.id}
                mode={mode}
                QID={element.id}
                question={element.Name}
                Url={element.Url}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tabledata({ mode, QID, Url, question }) {
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  
  const ref = useRef(null);
  const context = useContext(dataContext);
  const { updateDataDSA, deleteDataDSA, showAlert } = context;
  const ques = JSON.parse(localStorage.getItem("quesDSA"));
  const loveArray = JSON.parse(localStorage.getItem('loveArray'));
  // console.log("loveArray",loveArray);

  useEffect(() => {
    setIsChecked(loveArray.includes(QID));
  }, [QID, loveArray]);

  const updateDATA = async () => {
    if (!loveArray.includes(QID)) {
      loveArray.push(QID);
      localStorage.setItem("loveArray", JSON.stringify(loveArray));
      // localStorage.setItem("loveProgress", loveArray.length);
      localStorage.setItem('loveProgress', JSON.parse(localStorage.getItem('loveProgress'))+1);
    }
  };

  const deleteDATA = async () => {
    const index = loveArray.indexOf(QID);
    if (index !== -1) {
      loveArray.splice(index, 1);
      localStorage.setItem("loveArray", JSON.stringify(loveArray));
      // localStorage.setItem("loveProgress", loveArray.length);
      localStorage.setItem('loveProgress', JSON.parse(localStorage.getItem('loveProgress'))-1);
    }
  };

  const toggle = async () => {
    setLoader(true);
    if (isChecked) {
      if(localStorage.getItem('token')!=="hello")
      await deleteDataDSA(ques._id, ques.email, QID);
      await deleteDATA();
      showAlert("deselect", "Question Deselected 👾");
    } else {
      if(localStorage.getItem('token')!=="hello")
      await updateDataDSA(ques._id, ques.email, QID);
      await updateDATA();
      showAlert("success", "Question Completed Successfully 🎉🎊");
    }
    setIsChecked(!isChecked);
    setLoader(false);
  };

  return (
    <tr className={`table-${mode}-${isChecked}`}>
      <th scope="row">
        {loader ? (
          <span
            className="spinner-border spinner-border-sm my-1 text-primary"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          <input
            className="donebox"
            name={QID}
            onChange={toggle}
            type="checkbox"
            checked={isChecked}
            ref={ref}
          />
        )}
      </th>
      <th className={`questionname data-${mode}-${isChecked}`}>{QID}</th>
      <th>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Url}
          className={`questionname data-${mode}-${isChecked}`}
        >
          {question}
        </a>
      </th>
    </tr>
  );
}
