// import React, {Component, useState} from "react";
// import '../styles/App.css';

// const App = () => {
//   return (
//     <div id="main"></div>
//   )
// }


// export default App;
import { useState, useEffect } from "react";
import "./App.css";
import Submit from "./submit";

function App() {
  const initialValues = { username: "", email: "", password: "",phone:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const phone=/^\d{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    // if (!values.phonenumber) {
    //   errors.phonenumber = "phonenum is required!";
    // }
    if(!values.phonenumber){
      errors.phonenumber="Not a valid mobile number"
  }else if(values.phonenumber.length!==10){
      errors.phonenumber="not a valid mobile number"
  }else if(!phone.test(values.phonenumber)){
      errors.phonenumber="not a valid mobile number"
  }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
       <h1> <div className="ui message success" style={{color:"white"}}>hello {formValues.email.split("@gmail.com")}</div></h1>
      ) : (""
      )}

      <form onSubmit={handleSubmit}>
        <h1>Signup Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>


    
          <div className="field">
            <label>Phone Number</label>
            <input
              type="Number"
              name="phonenumber"
              placeholder="phonenumber"
              value={formValues.phonenumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phonenumber}</p>
          <label>Gender</label>
          <select id="gender">
         
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">others</option>
                    
                </select>
              
          <button className="fluid ui button blue">Submit </button>
        </div>
      </form>
    </div>
  );
}

export default App;