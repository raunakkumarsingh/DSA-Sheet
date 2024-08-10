import React, { useContext, useEffect, useState } from 'react';
// import './tableitem.css';
import dataContext from '../context/datacontext';
import quest from './question.json';

export default function Table({ mode, title, searc }) {
  const context = useContext(dataContext);
  const { updateData, deleteData, showAlert } = context;
  const ques = JSON.parse(localStorage.getItem("ques"));

  const [loader, setLoader] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [visibleTypes, setVisibleTypes] = useState([]);

  // Set background based on mode
  document.body.style.background = mode === "light" ? "white" : "#0E1C25";

  // Function to filter questions by type
  const filterQuestionsByType = (type) => {
    return quest.filter(
      (question) =>
        question.Type === type &&
        question.Title.includes(title) &&
        question.Url.includes(searc)
    );
  };

  useEffect(() => {
    // Determine which types have questions
    const types = ["Easy", "Medium", "Hard"];
    const activeTypes = types.filter(type => filterQuestionsByType(type).length > 0);
    setVisibleTypes(activeTypes);

    // Initialize checked items state based on local storage
    const farajArray = JSON.parse(localStorage.getItem('farajArray')) || [];
    const initialCheckedItems = {};
    quest.forEach((question) => {
      initialCheckedItems[question.id] = farajArray.includes(question.id);
    });
    setCheckedItems(initialCheckedItems);
  }, [title, searc]);

  const updateDATA = async (QID) => {
    let localData = JSON.parse(localStorage.getItem("farajArray")) || [];
    if (!localData.includes(QID)) {
      localData.push(QID);
    }
    localStorage.setItem("farajArray", JSON.stringify(localData));
    localStorage.setItem("farajProgress", localData.length);
  };

  const deleteDATA = async (QID) => {
    let localData = JSON.parse(localStorage.getItem("farajArray")) || [];
    const index = localData.indexOf(QID);
    if (index > -1) {
      localData.splice(index, 1);
    }
    localStorage.setItem("farajArray", JSON.stringify(localData));
    localStorage.setItem("farajProgress", localData.length);
  };

  const toggle = async (QID) => {
    setLoader((prevLoader) => ({ ...prevLoader, [QID]: true }));
    if (checkedItems[QID]) {
      await deleteData(ques._id, ques.email, QID);
      await deleteDATA(QID);
      showAlert("deselect", "Question Deselected 👾");
      setCheckedItems((prevChecked) => ({ ...prevChecked, [QID]: false }));
    } else {
      await updateData(ques._id, ques.email, QID);
      await updateDATA(QID);
      showAlert("success", "Question Completed Successfully 🎉🎊");
      setCheckedItems((prevChecked) => ({ ...prevChecked, [QID]: true }));
    }
    setLoader((prevLoader) => ({ ...prevLoader, [QID]: false }));
  };

  return (
    <div className={`table-${mode}`}>
      {visibleTypes.map((type) => {
        const questionsOfType = filterQuestionsByType(type);
        return questionsOfType.length > 0 ? (
          <div key={type}>
            <h3 className={`difficulty-${mode}`}>{type}</h3>
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
                  {questionsOfType.map((element) => (
                    <tr
                      className={`table-${mode}-${checkedItems[element.id] ? 'true' : 'false'}`}
                      key={element.id}
                    >
                      <th scope="row">
                        {loader[element.id] ? (
                          <span
                            className="spinner-border spinner-border-sm my-1 text-primary"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        ) : (
                          <input
                            className="donebox"
                            name={element.id}
                            onChange={() => toggle(element.id)}
                            type="checkbox"
                            checked={checkedItems[element.id] || false}
                          />
                        )}
                      </th>
                      <th className={`questionname data-${mode}-${checkedItems[element.id] ? 'true' : 'false'}`}>
                        {element.id}
                      </th>
                      <th>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={element.Url}
                          className={`questionname data-${mode}-${checkedItems[element.id] ? 'true' : 'false'}`}
                        >
                          {element.Name}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
