import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import DataContext from '../../context/datacontext';

function Home({ mode }) {
    const { getData, getDataDSA, getDataStriver, setAlert } = useContext(DataContext);
    const navigate = useNavigate();
    const [loader, setLoader] = useState({ DSA: false, Striver: false, Faraj: false });

    const handleNavigation = async (path, loaderKey, fetchData) => {
        setLoader(prevLoader => ({ ...prevLoader, [loaderKey]: true }));
        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            navigate(path);
            if (fetchData) await fetchData();
            setAlert(null);
        }
        setLoader(prevLoader => ({ ...prevLoader, [loaderKey]: false }));
    };

    document.body.style = mode === 'light' ? 'background:white' : 'background:#0E1C25';

    const cardInfo = [
        {
            title: '450 DSA (Love Babbar)',
            description: `This DSA sheet by Love Babbar contains 450 coding questions 
                which will help you in: 
                1. Understanding each and every concept of DSA.
                2. Clearing the DSA round for the Interviews, as these are the questions 
                generally asked in the companies like Amazon, Microsoft, Google, etc.`,
            loaderKey: 'DSA',
            path: '/450DSA',
            fetchData: getDataDSA,
            marginBottom: '1rem',
        },
        {
            title: 'Striver SDE Sheet',
            description: `This DSA Sheet by Raj Vikramaditya A.K.A Striver has questions 
                which are one of the most asked coding interview questions in companies 
                like Amazon, Microsoft, Media.net, Flipkart, etc. & covers almost all of 
                the concepts related to Data Structure & Algorithms.`,
            loaderKey: 'Striver',
            path: '/striver',
            fetchData: getDataStriver,
            marginBottom: '2.7rem',
        },
        {
            title: 'Faraz Sheet',
            description: `Here is a collection of problems from Mohammad Faraz DSA sheet using 
                which people have cracked their dream jobs. These questions are commonly asked 
                in product-based companies like Amazon, Microsoft, Google, etc.`,
            loaderKey: 'Faraj',
            path: '/faraj',
            fetchData: getData,
            marginBottom: '4rem',
        },
    ];

    return (
        <div className='container1 d-flex justify-content-around justify-content-center align-items-center row'>
            {cardInfo.map(({ title, description, loaderKey, path, fetchData, marginBottom }, index) => (
                <div
                    key={index}
                    className={`card-${mode} my-5 mx-1 col-lg-4 col-md-10 col-sm-12 card`}
                    id='cards'
                    style={{ width: '18rem' }}
                >
                    <div className='card-body'>
                        <h5 className={`card-${mode}-title`}>{title}</h5>
                        <p className={`cardcontent-${mode}`} style={{ marginBottom }}>
                            {description}
                        </p>
                        <div className='d-flex justify-content-end'>
                            <button
                                onClick={() => handleNavigation(path, loaderKey, fetchData)}
                                className='btn-light btn-primary'
                            >
                                GO &nbsp;
                                <span
                                    className='spinner-border spinner-border-sm my-1 text-black'
                                    role='status'
                                    aria-hidden='true'
                                    style={{ display: loader[loaderKey] ? 'flex' : 'none' }}
                                ></span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
