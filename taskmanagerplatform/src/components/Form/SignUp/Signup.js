import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup, reset } from "../../../stores/user";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
const notify = (notification) => {
  if (notification == "warning") {
    toast.warn("OOPS, something is wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (notification == "success") {
    toast.success("Success are true all data!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (notification == "error") {
    toast.error("Error, please enter data fill in the blank!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    companyName: "",
    address: "",
    phone: "",
  });
  const handleChange = (value, name) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isSuccess = Object.values(user).every((user) => user != "");
    if (isSuccess) {
      if (
        user.password.length >= 6 &&
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(user.password)
      ) {
        dispatch(signup(user));
        setUser({
          username: "",
          password: "",
          email: "",
          companyName: "",
          address: "",
          phone: "",
        });
        navigate("/login");
      } else {
        notify("warning");
      }
    } else {
      notify("error");
    }
  };
  return (
    <div className="signup__container">
      <div className="register__wrapper">
        <h2 className="title">Sign up</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="formControl">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              placeholder="username"
              value={user.username}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              placeholder="email"
              type="email"
              value={user.email}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              value={user.password}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              placeholder="address"
              value={user.address}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              placeholder="phone"
              value={user.phone}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="companyName">Company name:</label>
            <input
              id="companyName"
              name="companyName"
              placeholder="company name"
              value={user.companyName}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <button type="submit" className="singup__btn">
            Sign up
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
