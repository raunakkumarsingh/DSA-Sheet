import React, { useContext, useEffect, useState } from 'react';
import dataContext from '../../context/datacontext';
import './Alert.css';

function Alert() {
    const { alert } = useContext(dataContext);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (alert) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000); // Alert will hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [alert]);

    const capitalize = (word) => {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };

    const getAlertMessage = (type) => {
        switch (capitalize(type)) {
            case "Success":
                return "Success";
            case "Deselect":
                return "Deselect";
            case "Danger":
                return "Error";
            default:
                return "";
        }
    };

    return (
        <div className={`alert-container ${show ? 'slide-down' : 'slide-up'}`}>
            {alert && (
                <div className={`alert-content alert-${alert.type}`} role="alert">
                    <strong>{getAlertMessage(alert.type)}</strong>: {alert.msg}
                </div>
            )}
        </div>
    );
}

export default Alert;
