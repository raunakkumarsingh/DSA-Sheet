import React, { useState, useContext } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router';
import dataContext from '../../context/datacontext';

function Signup({ mode }) {
  const { showAlert } = useContext(dataContext);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (credentials.password !== credentials.cpassword) {
      showAlert("danger", "Passwords do not match!");
      setLoader(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        })
      });

      const json = await response.json();

      if (json.success) {
        showAlert("success", "Signup Successful 🥳🎉");
        await sendWelcomeEmail();
        navigate('/login');
      } else {
        showAlert("danger", json.error[0]?.msg || json.error);
      }
    } catch (error) {
      showAlert("danger", "Something went wrong. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  const sendWelcomeEmail = async () => {
    await fetch(`${process.env.REACT_APP_API_KEY}/api/mail/send/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        from: 'DSA-SHEET',
        subject: "Welcome to DSA-SHEET",
        text: "update details",
        html: `<h3>Hi ${credentials.name}</h3><br>
               <center><h4>Welcome to DSA-SHEET</h4></center><br>
               <p>Hello and welcome to our DSA-SHEET website! We are thrilled that you have chosen to visit us and we hope you'll find the information and resources here helpful in your pursuit of knowledge and mastery of these fundamental topics.</p><br>
               <p>As you know, Data Structures and Algorithms are critical concepts in computer science and programming. They form the backbone of many software systems and are essential for solving complex problems efficiently. Our website is designed to provide you with a comprehensive and accessible DSA question to all these unique concepts.</p><br>
               <p>We are passionate about helping people learn and grow, and we are committed to providing you with the highest quality resources and support. If you ever have any questions or feedback, we encourage you to reach out to us. Our team is always here to help.</p><br>
               <p>Thank you for choosing our DSA-SHEET website. We look forward to helping you achieve your goals!</p><br>
               <p>If you have any queries or suggestions, you can contact me at <a href="mailto:raunakkumar.india@gmail.com">raunakkumar.india@gmail.com</a>.</p>`
      })
    });
  };

  document.body.style.background = mode === "light" ? "white" : "#0E1C25";

  return (
    <div className="container col-sm-12" id="log" style={{ height: "100%" }}>
      <div className={`signupcard-${mode} d-flex justify-content-center align-items-center`}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={onChange}
                required
              />
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChange}
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                required
              />
              <label htmlFor="cpassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up &nbsp;
              {loader && (
                <span className="spinner-border spinner-border-sm my-1" role="status" aria-hidden="true"></span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
