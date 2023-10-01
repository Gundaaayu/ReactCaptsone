import React, { useState,useEffect } from "react";
import "../Component/Body.css";
import { useNavigate } from "react-router-dom";

const Body = () => {
    const history=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
      // Retrieve user details from localStorage during component initialization
      const storedDetails =
        JSON.parse(localStorage.getItem("userDetails")) || {};
      setName(storedDetails.name || "");
      setEmail(storedDetails.email || "");
      setUserName(storedDetails.userName || "");
      setMobileNo(storedDetails.mobileNo || "");
      setIsChecked(storedDetails.isChecked || false);
    }, []);

  const handleSignUp = () => {
    // Validate input fields
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!userName.trim()) {
      errors.userName = "Username is required";
    }
    if (!mobileNo.trim()) {
      errors.mobileNo = "Mobile No is required";
    }
    if (!isChecked) {
      errors.checkbox = "You must agree to the terms";
    }

    // If there are errors, update the state to display them
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      // Save user details to localStorage
      const userDetails = { name, email, userName, mobileNo, isChecked };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      // Your sign-up logic goes here if validation passes
      // For now, you can just log the form data
      console.log({ name, email, userName, mobileNo });
      history('/category')
    }
  };

  return (
    <div className="container">
      <div className="leftContainer"></div>
      <div className="rightContainer">
        <div>
          <h1>Super app</h1>
          <h5>Create your new account</h5>
        </div>
        <div className="rightInputBoxes">
          <div>
            <input
              className="inputBoxes"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {validationErrors.name && (
              <p className="error">{validationErrors.name}</p>
            )}
          </div>
          <div>
            <input
              className="inputBoxes"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {validationErrors.email && (
              <p className="error">{validationErrors.email}</p>
            )}
          </div>
          <div>
            <input
              className="inputBoxes"
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {validationErrors.userName && (
              <p className="error">{validationErrors.userName}</p>
            )}
          </div>
          <div>
            <input
              className="inputBoxes"
              type="password"
              placeholder="Confirm Password"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
            {validationErrors.mobileNo && (
              <p className="error">{validationErrors.mobileNo}</p>
            )}
          </div>
        </div>
        <div className="paragraph">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <p>Share my registration data with Superapp</p>
        </div>
        {validationErrors.checkbox && (
          <p className="error">{validationErrors.checkbox}</p>
        )}
        <div className="btn">
          <button className="btnsign" onClick={handleSignUp}>
            SIGN UP
          </button>
        </div>
        <div className="paragraphs">
          <p>
            By clicking on Sign up, you agree to Superapp{" "}
            <span style={{ color: "#72DB73", fontWeight: "700" }}>
              Terms and Conditions{" "}
            </span>{" "}
            of Use
          </p>
        </div>
        <div className="paragraphs">
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Body;
