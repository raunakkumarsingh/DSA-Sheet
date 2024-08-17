import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import bcrypt from 'bcryptjs';
import './Forget.css';
import dataContext from '../../context/datacontext';

function Forget({ mode }) {
  const { showAlert } = useContext(dataContext);
  const [loader, setLoader] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otpValid, setOtpValid] = useState(false);

  const [credentials, setCredentials] = useState({
    lemail: "",
    lpassword: "",
    lcpassword: "",
    lotp: ""
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/auth/forget`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.lemail,
        password: credentials.lpassword,
        confirmPassword: credentials.lcpassword,
      }),
    });

    const json = await response.json();
    setLoader(false);

    if (json.success) {
      showAlert("success", "Password reset successful 🥳🎉");
      navigate('/login');
    } else {
      showAlert("danger", json.error);
    }
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (!otpSent) {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/mail/send/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.lemail }),
      });

      const json = await response.json();
      setLoader(false);

      if (json.send === "success") {
        localStorage.setItem('otp', json.Otp);
        showAlert("success", "OTP successfully sent to your email");
        setOtpSent(true);
      } else {
        showAlert("danger", json.error);
      }
    } else {
      const isOtpValid = bcrypt.compareSync(credentials.lotp, localStorage.getItem('otp'));
      setOtpValid(isOtpValid);

      if (isOtpValid) {
        setIsVerified(true);
      } else {
        showAlert("danger", "Incorrect OTP. Please try again.");
      }
      setLoader(false);
    }
  };

  document.body.style = mode === "light" ? "background:white" : "background:#0E1C25";

  return (
    <div className="container" id="log" style={{ height: "100%" }}>
      <div className={`logincard-${mode} d-flex justify-content-center align-items-center`}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {!isVerified && (
              <div className="mb-3">
                <label htmlFor="lemail" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="lemail"
                  onChange={onChange}
                  id="lemail"
                />
              </div>
            )}

            {otpSent && !isVerified && (
              <div className="mb-3">
                <label htmlFor="lotp" className="form-label">Enter OTP</label>
                <input
                  type="text"
                  className="form-control"
                  name="lotp"
                  onChange={onChange}
                  id="lotp"
                />
              </div>
            )}

            {isVerified && (
              <>
                <div className="mb-3">
                  <label htmlFor="lpassword" className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="lpassword"
                    onChange={onChange}
                    id="lpassword"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lcpassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="lcpassword"
                    onChange={onChange}
                    id="lcpassword"
                  />
                </div>
              </>
            )}

            <button
              type={isVerified ? "submit" : "button"}
              className="btn btn-primary"
              onClick={isVerified ? undefined : sendOtp}
            >
              {isVerified ? "Update" : otpSent ? "Submit" : "Send"} &nbsp;
              {loader && (
                <span
                  className="spinner-border spinner-border-sm my-1"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forget;
