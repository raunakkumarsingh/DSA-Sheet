import DataContext from "./datacontext";
import { useState } from "react";


const DataState = (props) => {
    const [notes, setNotes] = useState([]);
    const [cpData, setCpData] = useState([]);
    const [alert, setAlert] = useState(null);
    const [ques, setQues] = useState([0]);


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

    const dataInitilized = () => {
        localStorage.setItem('ratingData', JSON.stringify({
            "800": [0],
            "900": [0], "1000": [0], "1100": [0], "1200": [0], "1300": [0],
            "1400": [0], "1500": [0], "1600": [0],
            "email": "",
            "__v": 0
        }));
        localStorage.setItem('cpProgress', 0);

        localStorage.setItem('loveArray', JSON.stringify([0]))
        localStorage.setItem("quesDSA", JSON.stringify({
            "name": "",
            "email": "",
            "love": [0],
            "__v": 0
        }))
        localStorage.setItem('loveProgress', 0);

        localStorage.setItem('striverArray', JSON.stringify([0]));
        localStorage.setItem('striverProgress', 0);
        localStorage.setItem('quesStriver', JSON.stringify({
            "_id": "66b67271f1b11c38672e3b2f",
            "user": "66b67270f1b11c38672e3b29",
            "name": "",
            "email": "",
            "striver": [
                0
            ],
            "__v": 0
        }));

    }

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
            localStorage.setItem('farajProgress', data.faraj.length - 1);
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
    const updateDataCp = async (email, rating, question) => {
        const data = await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/cpsheet/updatedata`,
            'POST',
            { email, rating, question }
        );
        setCpData(data);
    };

    const getDataCp = async () => {
        if (localStorage.getItem('token')) {
            const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/cpsheet/getdata`);
            console.log("cp", data);
            localStorage.setItem('ratingData', JSON.stringify(data));
            let totalQuestions = 0;
            if(!data.error){
            for (let rating in data) {
                if ((rating === "__v" || rating === "user" || rating === "_id" || rating === "error"|| rating === "email")) continue;
                totalQuestions += data[rating].length - 1;
            }
        
        }
            else{
                localStorage.setItem('ratingData', JSON.stringify({
                    "800": [0],
                    "900": [0], "1000": [0], "1100": [0], "1200": [0], "1300": [0],
                    "1400": [0], "1500": [0], "1600": [0],
                    "email": "",
                    "__v": 0
                }));
            }
            localStorage.setItem('cpProgress', totalQuestions);

            console.log(totalQuestions)

        }
    };

    const deleteDataCp = async (email, rating, question) => {
        await fetchAPI(
            `${process.env.REACT_APP_API_KEY}/api/cpsheet/deletedata`,
            'DELETE',
            { email, rating, question }
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
            localStorage.setItem('loveProgress', data.love.length - 1);
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
            localStorage.setItem('striverProgress', data.striver.length - 1);
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
        if (data.success) {
            showAlert("success", "Leetcode data fetched successfully 🥳🎉");
        }
        else {
            showAlert("danger", "Leetcode data fetching failed please try again 😔");
            return;
        }
        setLeetcodeSubmitted(data.data);
        localStorage.setItem('leetcodeSubmitted', JSON.stringify(data.data));

    };

    const getCodechef = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codechef/${username}`);
        if (data.success) {
            showAlert("success", "Codechef data fetched successfully 🥳🎉");
        }
        else {
            showAlert("danger", "Codechef data fetching failed please try again 😔");
            return;
        }
        setCodechefSubmitted(data.data)
        localStorage.setItem('codechefSubmitted', JSON.stringify(data.data));

    };

    const getCodeforces = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codeforces/${username}`);
        if (data.success) {
            showAlert("success", "Codeforces data fetched successfully 🥳🎉");
        }
        else {
            showAlert("danger", "Codeforces data fetching failed please try again 😔");
            return;
        }
        setCodeforcesSubmitted(data.data)
        localStorage.setItem('codeforcesSubmitted', JSON.stringify(data.data));
    };


    const getGfg = async (username) => {
        const data = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/gfg/${username}`);
        if (data.success) {
            showAlert("success", "GFG data fetched successfully 🥳🎉");
        }
        else {
            showAlert("danger", "GFG data fetching failed please try again 😔");
            return;
        }
        setGfgSubmitted(data.data)
        localStorage.setItem('gfgSubmitted', JSON.stringify(data.data));
    };

    const updateCardDetails = async () => {
        // console.log("update card details", leetcodeSubmitted);
        // console.log("update card details1", JSON.parse(localStorage.getItem('leetcodeSubmitted')));

        const leetcode = JSON.parse(localStorage.getItem('leetcodeSubmitted'));
        const codeforces = JSON.parse(localStorage.getItem('codeforcesSubmitted'));
        const codechef = JSON.parse(localStorage.getItem('codechefSubmitted'));
        const gfg = JSON.parse(localStorage.getItem('gfgSubmitted'));

        if (leetcode) {
            const data1 = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/leetcode/${leetcode.username}`);
            console.log("data11", data1.data);
            console.log("data12", leetcode);

            if (data1.success && JSON.stringify(data1.data) !== localStorage.getItem('leetcodeSubmitted')) {
                console.log("Leetcode data updated");
                setLeetcodeSubmitted(data1.data);
                localStorage.setItem('leetcodeSubmitted', JSON.stringify(data1.data));
            }
        }

        if (codechef) {
            const data2 = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codechef/${codechef.username}`);
            if (data2.success && JSON.stringify(data2.data) !== localStorage.getItem('codechefSubmitted')) {
                setCodechefSubmitted(data2.data);
                localStorage.setItem('codechefSubmitted', JSON.stringify(data2.data));
            }
        }

        if (codeforces) {
            const data3 = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/codeforces/${codeforces.username}`);
            if (data3.success && JSON.stringify(data3.data) !== localStorage.getItem('codeforcesSubmitted')) {
                setCodeforcesSubmitted(data3.data);
                localStorage.setItem('codeforcesSubmitted', JSON.stringify(data3.data));
            }
        }

        if (gfg) {
            const data4 = await fetchAPI(`${process.env.REACT_APP_API_KEY}/api/gfg/${gfg.username}`);
            if (data4.success && JSON.stringify(data4.data) !== localStorage.getItem('gfgSubmitted')) {
                setGfgSubmitted(data4.data);
                localStorage.setItem('gfgSubmitted', JSON.stringify(data4.data));
            }
        }

        // console.log("Data update completed");
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
                setLeetcodeSubmitted, setCodechefSubmitted, setCodeforcesSubmitted, setGfgSubmitted,
                updateCardDetails,
                updateDataCp,
                getDataCp,
                deleteDataCp,
                dataInitilized

            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataState;
