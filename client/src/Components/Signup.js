import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Validation from "./SignupValidation";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3001/signup", values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  //   const handleChange = (event) => {
  //     setFinalForm((prev) => ({
  //       ...prev,
  //       [event.target.name]: [event.target.value],
  //     }));
  //   };

  //   const onSubmit = async (data) => {
  //     await axios.post("http://localhost:3001/auth", data);
  //     console.log(data);
  //   };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded-w-25">
        <h2 className="fs-1 mb-3">Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign up
          </button>
          <p className="mb-3">You are agree to our terms and policies</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
