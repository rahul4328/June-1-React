import React, { useState } from "react";

const Form = () => {
  //usestate for all the required field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // usestate for all the error field that occurs due to invalid type error
  const [errorName, setNameError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // for successful message display
  const [successMessage, setSuccessMessage] = useState("");

  // consist all the value or parameters of form field
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // function to validate the fields at basic level
  const formSubmit = (event) => {
    event.preventDefault();

    // Name validation
    if (name.trim() === "") {
      setNameError("Error: All fields are mandatory");
      setSuccessMessage("");
      return;
    }

    if (!name.includes(" ")) {
      setNameError("Please enter your full name");
      setSuccessMessage("");
      return;
    }

    // Email validation
    if (email.trim() === "") {
      setErrorEmail("Email is required");
      setSuccessMessage("");
      return;
    }

    if (!isValidEmail(email.trim())) {
      setErrorEmail("Please enter a valid email");
      setSuccessMessage("");
      return;
    }

    // Password validation
    if (password.trim() === "") {
      setErrorPassword("Password is required");
      setSuccessMessage("");
      return;
    }

    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      setSuccessMessage("");
      return;
    }

    // Confirm password validation
    if (confirmPassword.trim() === "") {
      setErrorConfirmPassword("Confirm Password is required");
      setSuccessMessage("");
      return;
    }

    if (confirmPassword !== password) {
      setErrorConfirmPassword("Confirm Password does not match the password");
      setSuccessMessage("");
      return;
    }

    // If all validations pass, show success message
    setSuccessMessage("Successfully Signed Up!");
  };

  // is valid email address field using regex pattern searched on google to get the pattern
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // remove error message after it get resolved properly
  const clearError = (formValues) => {
    switch (formValues) {
      case "name":
        setNameError("");
        break;

      case "email":
        setErrorEmail("");
        break;

      case "password":
        setErrorPassword("");
        break;

      case "confirmPassword":
        setErrorConfirmPassword("");
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <h1> Signup </h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            clearError("name");
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            clearError("email");
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            clearError("password");
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            clearError("confirmPassword");
          }}
        />{" "}
        <p>
          {" "}
          {/* error message display section*/}{" "}
          {errorName && <p className="error"> {errorName} </p>}{" "}
          {errorEmail && <p className="error"> {errorEmail} </p>}{" "}
          {errorPassword && <p className="error"> {errorPassword} </p>}{" "}
          {errorConfirmPassword && (
            <p className="error"> {errorConfirmPassword} </p>
          )}
          {/* Successfull message display*/}{" "}
          {successMessage && <p className="success"> {successMessage} </p>}{" "}
        </p>
        <button type="submit" onClick={formSubmit}>
          {" "}
          Submit{" "}
        </button>{" "}
      </form>
    </div>
  );
};

export default Form;

// challenges that I faced during building this site
// 1) Email validation function totally take help of google to get the optimized code
// 2) Remove error message after the error get resolved => use switched cases for resolving this error
// 3) add a successfully login mesage after all filed get resolved

// imp => forget to add value = {name} and for rest field and also to aff clearerror attribute
// forget to add the successfull message as empty when the error occured for all the fields
// condition forget to add for all that if non of the filed is filled then dhow the comman message as "all fields are required"
