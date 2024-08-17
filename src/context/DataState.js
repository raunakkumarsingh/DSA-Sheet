import DataContext from "./datacontext";
import { useState, useEffect } from "react";


const DataState = (props) => {
    const [notes, setNotes] = useState([]);
    const [alert, setAlert] = useState(null);
    const [ques, setQues] = useState([0]);
    const apiKey = process.env.REACT_APP_API_KEY;

    const [leetcodeSubmitted, setLeetcodeSubmitted] = useState(null);
    const [codeforcesSubmitted, setCodeforcesSubmitted] = useState(null);
    const [codechefSubmitted, setCodechefSubmitted] = useState(null);
    const [gfgSubmitted, setGfgSubmitted] = useState(null);
    const showAlert = (type, msg) => {
        setAlert({ type, msg });
        setTimeout(() => setAlert(null), 2200);
    };

    const fetchAPI = async (url, method = 'GET', body = null) => {
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        };
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });
        return response.json();
    };

    const getNotes = async () => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}`);
        setNotes(data);
    };

    const updateData = async (id, email, faraj) => {
        const data = await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/datafaraj/updatedata/${id}`,
            'POST',
            { email, faraj }
        );
        setNotes(data);
    };

    const getData = async () => {
        if (localStorage.getItem('token')) {
            const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/datafaraj/getdata`);
            localStorage.setItem('farajProgress', data.faraj.length);
            localStorage.setItem('farajArray', JSON.stringify(data.faraj));
            localStorage.setItem('ques', JSON.stringify(data));
            localStorage.setItem('username', data.name);
        }
    };

    const deleteData = async (id, email, faraj) => {
        await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/datafaraj/deletedata/${id}`,
            'DELETE',
            { email, faraj }
        );
    };

    const updateDataDSA = async (id, email, love, title, value) => {
        const data = await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/dataDSA/updatedata/${id}`,
            'POST',
            { email, love, _Title: value }
        );
        setNotes(data);
    };

    const getDataDSA = async () => {
        if (localStorage.getItem('token')) {
            const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/dataDSA/getdata`);
            localStorage.setItem('loveArray', JSON.stringify(data.love));
            localStorage.setItem('loveProgress', data.love.length);
            localStorage.setItem('quesDSA', JSON.stringify(data));
            setQues(data);
        }
    };

    const deleteDataDSA = async (id, email, love) => {
        await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/dataDSA/deletedata/${id}`,
            'DELETE',
            { email, love }
        );
    };

    const updateDataStriver = async (id, email, striver) => {
        await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/datastriver/updatedata/${id}`,
            'POST',
            { email, striver }
        );
    };

    const getDataStriver = async () => {
        if (localStorage.getItem('token')) {
            const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/datastriver/getdata`);
            localStorage.setItem('striverArray', JSON.stringify(data.striver));
            localStorage.setItem('striverProgress', data.striver.length);
            localStorage.setItem('quesStriver', JSON.stringify(data));
            setQues(data);
        }
    };

    const deleteDataStriver = async (id, email, striver) => {
        await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/datastriver/deletedata/${id}`,
            'DELETE',
            { email, striver }
        );
    };

    const getCodingIDs = async () => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codingids/get`);

        if (data.leetcodeID?.details) {
            const leetcodeDetails = data.leetcodeID.details;
            setLeetcodeSubmitted(leetcodeDetails);
            localStorage.setItem('leetcodeSubmitted', JSON.stringify(leetcodeDetails));
        }

        if (data.codeforcesID?.details) {
            const codeforcesDetails = data.codeforcesID.details;
            setCodeforcesSubmitted(codeforcesDetails);
            localStorage.setItem('codeforcesSubmitted', JSON.stringify(codeforcesDetails));
        }

        if (data.codechefID?.details) {
            const codechefDetails = data.codechefID.details;
            setCodechefSubmitted(codechefDetails);
            localStorage.setItem('codechefSubmitted', JSON.stringify(codechefDetails));
        }

        if (data.gfgID?.details) {
            const gfgDetails = data.gfgID.details;
            setGfgSubmitted(gfgDetails);
            localStorage.setItem('gfgSubmitted', JSON.stringify(gfgDetails));
        }


        console.log("LeetCode Details:", data.leetcodeID?.details);
        console.log("Codeforces Details:", data.codeforcesID?.details);
        console.log("Codechef Details:", data.codechefID?.details);
        console.log("GFG Details:", data.gfgID?.details);
    };

    const updateCodingIDs = async (codingIDs) => {
        const data = await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/codingids/update`,
            'PUT',
            codingIDs
        );
        
    };

    const getLeetcode = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/leetcode/${username}`);
        
        setLeetcodeSubmitted(data.data);
        localStorage.setItem('leetcodeSubmitted', JSON.stringify(data.data));

    };

    const getCodechef = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codechef/${username}`);
        
        setCodechefSubmitted(data.data)
        localStorage.setItem('codechefSubmitted', JSON.stringify(data.data));

    };

    const getCodeforces = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codeforces/${username}`);
        

        setCodeforcesSubmitted(data.data)
        localStorage.setItem('codeforcesSubmitted', JSON.stringify(data.data));


    };

    const getGfg = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/gfg/${username}`);

        setGfgSubmitted(data.data)
        localStorage.setItem('gfgSubmitted', JSON.stringify(data.data));
        

    };

    return (
        <DataContext.Provider
            value={{
                notes,
                alert,
                showAlert,
                setAlert,
                updateData,
                getData,
                deleteData,
                getNotes,
                getCodingIDs,
                getLeetcode,
                getCodechef,
                getGfg,
                getCodeforces,
                ques,
                getDataDSA,
                updateDataDSA,
                deleteDataDSA,
                getDataStriver,
                updateDataStriver,
                deleteDataStriver,
                updateCodingIDs,
                leetcodeSubmitted, codechefSubmitted, codeforcesSubmitted, gfgSubmitted,
                setLeetcodeSubmitted, setCodechefSubmitted, setCodeforcesSubmitted, setGfgSubmitted
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataState;
