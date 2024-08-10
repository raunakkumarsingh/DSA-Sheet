import React from 'react'
import './Progress.css';

export default function Progressbar(props) {
    const { sheetName, totalQuestions, completedQuestions } = props;
    let percent = (completedQuestions / totalQuestions) * 100;

    return (
        <>
            <h1 className={`d-flex justify-content-center heading-${props.mode}`}>{sheetName}</h1>
            <h2 className={`questions-num-${props.mode}`}>{completedQuestions} out of {totalQuestions}</h2>
            <div className='container'>
                <div className="progress " style={{width: "75%", height: "25px", margin: "2rem"}}>
                    <div className="progress-bar progress-bar-animated d-flex justify-content-center" 
                        role="progressbar" 
                        aria-label="Animated striped example" 
                        aria-valuenow={percent} 
                        aria-valuemin="0" 
                        aria-valuemax="100" 
                        style={{width: `${percent}%`, color: "aqua"}}>
                        {Math.round(percent)}%
                    </div>
                </div>
            </div>
        </>
    )
}
