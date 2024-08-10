import DataContext from "./datacontext";
import { useState, useEffect } from "react";

const DataState = (props) => {
    const [notes, setNotes] = useState([]);
    const [alert, setAlert] = useState(null);
    const [ques, setQues] = useState([0]);

    const showAlert = (type, msg) => {
        setAlert({ type, msg });
        setTimeout(() => {
            setAlert(null);
        }, 2200);
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
        const json = await fetchAPI('https://c2f6-3-93-173-141.ngrok-free.app');
        setNotes(json);
    };

    const updateData = async (id, email, faraj) => {
        const json = await fetchAPI(
            `https://c2f6-3-93-173-141.ngrok-free.app/api/datafaraj/updatedata/${id}`,
            'POST',
            { email, faraj }
        );
        setNotes(json);
    };

    const getData = async () => {
        if (localStorage.getItem('token')) {
            const json = await fetchAPI(
                'https://c2f6-3-93-173-141.ngrok-free.app/api/datafaraj/getdata'
            );
            localStorage.setItem('farajProgress', json.faraj.length);
            localStorage.setItem('farajArray', JSON.stringify(json.faraj));
            localStorage.setItem('ques', JSON.stringify(json));
            localStorage.setItem('username', json.name);
        }
    };

    const deleteData = async (id, email, faraj) => {
        await fetchAPI(
            `https://c2f6-3-93-173-141.ngrok-free.app/api/datafaraj/deletedata/${id}`,
            'DELETE',
            { email, faraj }
        );
    };

    const updateDataDSA = async (id, email, love, _Title, value) => {
        const json = await fetchAPI(
            `https://c2f6-3-93-173-141.ngrok-free.app/api/dataDSA/updatedata/${id}`,
            'POST',
            { email, love, _Title: value }
        );
        setNotes(json);
    };

    const getDataDSA = async () => {
        if (localStorage.getItem('token')) {
            const json = await fetchAPI(
                'https://c2f6-3-93-173-141.ngrok-free.app/api/dataDSA/getdata'
            );
            localStorage.setItem('loveArray', JSON.stringify(json.love));
            localStorage.setItem('loveProgress', json.love.length);
            localStorage.setItem('quesDSA', JSON.stringify(json));
            setQues(json);
        }
    };

    const deleteDataDSA = async (id, email, love) => {
        await fetchAPI(
            `https://c2f6-3-93-173-141.ngrok-free.app/api/dataDSA/deletedata/${id}`,
            'DELETE',
            { email, love }
        );
    };

    const updateDataStriver = async (id, email, striver) => {
        await fetchAPI(
            `https://c2f6-3-93-173-141.ngrok-free.app/api/datastriver/updatedata/${id}`,
            'POST',
            { email, striver }
        );
    };

    const getDataStriver = async () => {
        if (localStorage.getItem('token')) {
            const json = await fetchAPI(
                'https://c2f6-3-93-173-141.ngrok-free.app/api/datastriver/getdata'
            );
            localStorage.setItem('striverArray', JSON.stringify(json.striver));
            localStorage.setItem('striverProgress', json.striver.length);
            localStorage.setItem('quesStriver', JSON.stringify(json));
            setQues(json);
        }
    };

    const deleteDataStriver = async (id, email, striver) => {
        await fetchAPI(
            `https://c2f6-3-93-173-141.ngrok-free.app/api/datastriver/deletedata/${id}`,
            'DELETE',
            { email, striver }
        );
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
                ques,
                getDataDSA,
                updateDataDSA,
                deleteDataDSA,
                getDataStriver,
                updateDataStriver,
                deleteDataStriver,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataState;
