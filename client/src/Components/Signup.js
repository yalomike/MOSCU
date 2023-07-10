import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import Validation from "./SignupValidation";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/auth", values, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    Navigate("/");
  };

  // if (
  //   errors.name === "" &&
  //   errors.username === "" &&
  //   errors.password === ""
  // ) {
  //   try {
  //     const res = await axios.post("http://localhost:3001/signup", values);
  //     console.log(res);

  //     const createdUsername = res.data.username;
  //     console.log("Created username:", createdUsername);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // };

  return (
    <div className="d-flex justify-content-center align-items-center bg-black vh-100">
      <div className="bg-white p-4 rounded-2xl rounded-w-25">
        <h2 className="fs-1 mb-3">Sign-Up</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
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
            {/* {errors.username && (
              <span className="text-danger">{errors.username}</span>
            )} */}
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
            {/* {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )} */}
          </div>

          <button
            type="submit"
            className="btn btn-success text-black w-100 rounded-0"
          >
            Sign up
          </button>
          <p className="mb-3">You are agree to our terms and policies</p>
          <Link
            to="/login"
            className="btn  border w-100  hover:bg-blue-500 rounded-0 text-decoration-none"
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
