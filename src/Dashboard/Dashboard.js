import React, { useState, useContext, useEffect,useRef } from 'react';
import dataContext from '../context/datacontext';
import CardComponent from '../components/CardComponent/Cardcomponent';
import { Link,useNavigate } from 'react-router-dom';
import "./dashboard.css";

function ProgressBar({ totalQuestions, completedQuestions }) {
    const percent = totalQuestions ? (completedQuestions / totalQuestions) * 100 : 0;
    

    return (
        <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ position: 'relative', height: '30px' }} // Adjust height as needed
        >
            <div className="progress-bar" style={{ width: `${percent}%` }}>
                {/* The progress bar itself */}
            </div>
            <span
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'black',
                    fontWeight: 'bold',
                }}
            >
                {completedQuestions}/{totalQuestions}
            </span>
        </div>
    );
}


function Dashboard({ mode }) {
    const navigate=useNavigate();
    const [loader, setLoader] = useState({ leetcode: false, codechef: false, codeforces: false,gfg: false });
    const {
        showAlert,
        updateCodingIDs,
        getLeetcode,
        getGfg,
        getCodeforces,
        getCodechef,
        leetcodeSubmitted,
        codechefSubmitted,
        gfgSubmitted,
        codeforcesSubmitted,
        setLeetcodeSubmitted, setCodechefSubmitted, setCodeforcesSubmitted, setGfgSubmitted,
        updateCardDetails
    } = useContext(dataContext);

    
    const [userIDs, setUserIDs] = useState({
        leetcodeID: leetcodeSubmitted?.username || "",
        codeforcesID: codeforcesSubmitted?.username || "",
        codechefID: codechefSubmitted?.username || "",
        gfgID: gfgSubmitted?.username || ""
    });

      const firstRender = useRef(true);

      useEffect(() => {
        if (firstRender.current) {
            updateCardDetails(userIDs);
          firstRender.current = false;
        } 
    
      }, []); 

    useEffect(() => {
        document.body.style.zoom = '100%';
        const leetcode = JSON.parse(localStorage.getItem('leetcodeSubmitted'));
        const codeforces = JSON.parse(localStorage.getItem('codeforcesSubmitted'));
        const codechef = JSON.parse(localStorage.getItem('codechefSubmitted'));
        const gfg = JSON.parse(localStorage.getItem('gfgSubmitted'));

        if (leetcode) setLeetcodeSubmitted(leetcode);
        if (codeforces) setCodeforcesSubmitted(codeforces);
        if (codechef) setCodechefSubmitted(codechef);
        if (gfg) setGfgSubmitted(gfg);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserIDs({ ...userIDs, [name]: value });
    };

    const handleSubmit = async (event, platform,loaderKey) => {
        event.preventDefault();
        setLoader(prevLoader => ({ ...prevLoader, [platform]: true }));
        const id = userIDs[`${platform}ID`];
        if (!id.trim()) return;

        switch (platform) {
            case "leetcode":
                await getLeetcode(id);
                break;
            case "codeforces":
                await getCodeforces(id);
                break;
            case "codechef":
                await getCodechef(id);
                break;
            case "gfg":
                await getGfg(id);
                break;
            default:
                return;
        }
        setLoader(prevLoader => ({ ...prevLoader, [platform]: false }));

    };
    const handleDelete = async (event, platform) => {
        event.preventDefault();
        console.log("platform: ", platform)
      
        switch (platform) {
            case "Leetcode":
                setLeetcodeSubmitted(null);
                localStorage.removeItem('leetcodeSubmitted');
                break;
            case "Codeforces":
                setCodeforcesSubmitted(null);
                localStorage.removeItem('codechefSubmitted');
                break;
            case "Codechef":
                setCodechefSubmitted(null)
                localStorage.removeItem('codechefSubmitted');
                break;
            case "GFG":
                setGfgSubmitted(null);
                localStorage.removeItem('gfgSubmitted')
                break;
            default:
                return;
        }

    };
    useEffect(() => {
        if (leetcodeSubmitted == null && codechefSubmitted == null && codeforcesSubmitted == null && gfgSubmitted == null) {
            return;
        }
        const codingIDs = {
            ...(leetcodeSubmitted && {
                leetcodeID: { username: userIDs.leetcodeID, details: leetcodeSubmitted },
            }),
            ...(codeforcesSubmitted && {
                codeforcesID: { username: userIDs.codeforcesID, details: codeforcesSubmitted },
            }),
            ...(codechefSubmitted && {
                codechefID: { username: userIDs.codechefID, details: codechefSubmitted },
            }),
            ...(gfgSubmitted && {
                gfgID: { username: userIDs.gfgID, details: gfgSubmitted },
            }),
        };

        updateCodingIDs(codingIDs).then((data) => {
  
        });
    }, [leetcodeSubmitted, codeforcesSubmitted, codechefSubmitted, gfgSubmitted]);

  

    const totalQuestions =
        (leetcodeSubmitted?.totalQuestions || 0) +
        (codeforcesSubmitted?.totalQuestions || 0) +
        (codechefSubmitted?.problems_solved || 0) +
        (gfgSubmitted?.total_problems_solved || 0);

    const totalContests =
        (leetcodeSubmitted?.totalContests || 0) +
        (codeforcesSubmitted?.totalContests || 0) +
        (codechefSubmitted?.no_of_contest || 0) +
        0;

    return (
        <div className={`dashboard-container-${mode} dashboard`}>
            <div className={`item-${mode} item-2 d-flex flex-column flex-md-row justify-content-between align-items-center`}>
                <div className='d-flex flex-column align-items-center mx-2 text-center p-3'>
                    <p>Total Questions</p>
                    <span> {totalQuestions}</span>
                </div>
                <div className='d-flex flex-column align-items-center mx-2 text-center p-3'>
                    <p>Total Contest</p>
                    <span>{totalContests}</span>
                </div>
            </div>

            {/* Progress Bars Section */}
            <div className={`item-${mode} item-1 mx-3 d-flex flex-column flex-md-row align-items-center justify-content-around flex-wrap`}>
                <div className='card-item-1 mx-2 progressbar d-flex flex-column align-items-center'>
                    <h1 className='smallh1 input-Heading' onClick={() => navigate("/450DSA")}>LoveDSA Sheet</h1>
                    <ProgressBar
                        totalQuestions={450}
                        completedQuestions={localStorage.getItem("loveProgress") || 0}
                    />
                </div>
                <div className='card-item-2 mx-2 progressbar d-flex flex-column align-items-center'>
                    <h1 className='smallh1 input-Heading' onClick={() => navigate("/striver")}>Striver Sheet</h1>
                    <ProgressBar
                        totalQuestions={184}
                        completedQuestions={localStorage.getItem("striverProgress") || 0}
                    />
                </div>
                <div className='card-item-3 mx-2 progressbar d-flex flex-column align-items-center'>
                    <h1 className='smallh1 input-Heading' onClick={() => navigate("/cpsheet")}>CP Sheet</h1>
                    <ProgressBar
                        totalQuestions={279}
                        completedQuestions={localStorage.getItem('cpProgress')|| 0}
                    />
                </div>
                <div className='card-item-3 mx-2 progressbar d-flex flex-column align-items-center'>
                    <h1 className='smallh1 input-Heading' onClick={() => navigate("/fraz")}>Fraz Sheet</h1>
                    <ProgressBar
                        totalQuestions={324}
                        completedQuestions={localStorage.getItem("farajProgress")||0 }
                    />
                </div> 
                
                <div className='card-item-4'>
                    <Link to="/sheet"  type="submit"
                            className="btn btn-primary w-100 p-3"
                            style={{ fontSize: "1rem" }}>Go to DSASHEET</Link>
                </div>
            </div>

            {/* Leetcode Section */}
            {leetcodeSubmitted == null ? (
                <div className={`input-card-${mode} item-3 d-flex flex-column align-items-center justify-content-center p-4 shadow-sm rounded bg-white`}>
                    <h2 className={`mb-4 text-center input-Heading-${mode}`}>Enter your Leetcode ID</h2>
                    <form className="w-100" onSubmit={(e) => handleSubmit(e, "leetcode")}>
                        <input
                            type="text"
                            value={userIDs.leetcodeID}
                            name="leetcodeID"
                            onChange={handleChange}
                            placeholder="Leetcode ID"
                            className={`input-field-${mode} form-control mb-3 p-3 border rounded `}
                            style={{ fontSize: "1rem" }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-100 p-3"
                            style={{ fontSize: "1rem" }}
                        >
                            Submit &nbsp;
                                <span
                                    className='spinner-border spinner-border-sm my-1 text-black'
                                    role='status'
                                    aria-hidden='true'
                                    style={{ display: loader["leetcode"] ? 'flex' : 'none' }}
                                ></span>
                        </button>
                    </form>
                </div>
            ) : (
                <CardComponent name={`item-${mode} item-3`} title="Leetcode" rating={leetcodeSubmitted.rating} maxRating={leetcodeSubmitted.maxRating} activeDays={leetcodeSubmitted.totalContests} totalSolved={leetcodeSubmitted.totalQuestions} easy={leetcodeSubmitted.easy} medium={leetcodeSubmitted.medium} hard={leetcodeSubmitted.hard} mode={mode} handleDelete={handleDelete} />
            )}

            {/* Codeforces Section */}
            {codeforcesSubmitted == null ? (
                <div className={`input-card-${mode} item-4  d-flex flex-column align-items-center justify-content-center p-4 shadow-sm rounded bg-white`}>
                    <h2 className={`mb-4 text-center input-Heading-${mode}`}>Enter your Codeforces ID</h2>
                    <form className="w-100" onSubmit={(e) => handleSubmit(e, "codeforces")}>
                        <input
                            type="text"
                            value={userIDs.codeforcesID}
                            name="codeforcesID"
                            onChange={handleChange}
                            placeholder="Codeforces ID"
                            className={`form-control mb-3 p-3 border rounded input-field-${mode}`}
                            style={{ fontSize: "1rem" }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-100 p-3"
                            style={{ fontSize: "1rem" }}
                        >
                            Submit &nbsp;
                                <span
                                    className='spinner-border spinner-border-sm my-1 text-black'
                                    role='status'
                                    aria-hidden='true'
                                    style={{ display: loader["codeforces"] ? 'flex' : 'none' }}
                                ></span>
                        </button>
                    </form>
                </div>
            ) : (
                <CardComponent name={`item-${mode} item-4`} title="Codeforces" rating={codeforcesSubmitted.rating} maxRating={codeforcesSubmitted.maxRating} activeDays={codeforcesSubmitted.totalContests} totalSolved={codeforcesSubmitted.totalQuestions
                } tag={codeforcesSubmitted.tag} mode={mode} handleDelete={handleDelete} />
            )}

            {/* Codechef Section */}
            {codechefSubmitted == null ? (
                <div className={`input-card-${mode} item-5  d-flex flex-column align-items-center justify-content-center p-4 shadow-sm rounded bg-white`}>
                    <h2 className={`mb-4 text-center input-Heading-${mode}`}>Enter your Codechef ID</h2>
                    <form className="w-100" onSubmit={(e) => handleSubmit(e, "codechef")}>
                        <input
                            type="text"
                            value={userIDs.codechefID}
                            name="codechefID"
                            onChange={handleChange}
                            placeholder="Codechef ID"
                            className={`form-control mb-3 p-3 border rounded input-field-${mode}`}
                            style={{ fontSize: "1rem" }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-100 p-3"
                            style={{ fontSize: "1rem" }}
                        >
                            Submit &nbsp;
                                <span
                                    className='spinner-border spinner-border-sm my-1 text-black'
                                    role='status'
                                    aria-hidden='true'
                                    style={{ display: loader["codechef"] ? 'flex' : 'none' }}
                                ></span>
                        </button>
                    </form>
                </div>
            ) : (
                <CardComponent name={`item-${mode} item-5`} title="Codechef" rating={codechefSubmitted.rating} maxRating={codechefSubmitted.maxRating} activeDays={codechefSubmitted.no_of_contest} totalSolved={codechefSubmitted.problems_solved
                } tag={codechefSubmitted.tag} mode={mode} handleDelete={handleDelete} />
            )}

            {/* GFG Section */}
            {!gfgSubmitted ? (
                <div className={`input-card-${mode} item-6  d-flex flex-column align-items-center justify-content-center p-4 shadow-sm rounded bg-white`}>
                    <h2 className={`mb-4 text-center input-Heading-${mode}`}>Enter your GFG ID</h2>
                    <form className="w-100" onSubmit={(e) => handleSubmit(e, "gfg")}>
                        <input
                            type="text"
                            value={userIDs.gfgID}
                            name="gfgID"
                            onChange={handleChange}
                            placeholder="GFG ID"
                            className={`form-control mb-3 p-3 border rounded input-field-${mode}`}
                            style={{ fontSize: "1rem" }}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary w-100 p-3"
                            style={{ fontSize: "1rem" }}
                        >
                            Submit &nbsp;
                                <span
                                    className='spinner-border spinner-border-sm my-1 text-black'
                                    role='status'
                                    aria-hidden='true'
                                    style={{ display: loader["gfg"] ? 'flex' : 'none' }}
                                ></span>
                        </button>
                    </form>
                </div>
            ) : (
                <CardComponent name={`item-${mode} item-6`} title="GFG" rating={gfgSubmitted.overall_coding_score} activeDays={0} totalSolved={gfgSubmitted.total_problems_solved} easy={gfgSubmitted.easy_problems_solved + gfgSubmitted.basic_problems_solved} medium={gfgSubmitted.medium_problems_solved + gfgSubmitted.school_problems_solved} hard={gfgSubmitted.hard_problems_solved} college_rank={gfgSubmitted.college_rank} overall_coding_score={gfgSubmitted.overall_coding_score} mode={mode} handleDelete={handleDelete} />
            )}
        </div>
    );
}

export default Dashboard;
