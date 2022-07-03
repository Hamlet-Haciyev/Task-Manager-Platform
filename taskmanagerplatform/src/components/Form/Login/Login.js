import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
const notify = (notification) => {
  if (notification == "warning") {
    toast.warn("OOPS, Please enter username and password!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (notification == "success") {
    toast.success("Success are true all data!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (notification == "error") {
    toast.error("Error, password or username is wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleChange = (value, name) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("user"));
    let isSuccess = false;
    for (let i = 0; i < users.length; i++) {
      if (
        (users[i].username == user.username, users[i].password == user.password)
      ) {
        isSuccess = true;
      }
    }
    if (user.username !== "" && user.password !== "") {
      if (isSuccess) {
        navigate("/taskmanage");
      } else {
        notify("error");
      }
    } else {
      notify("warning");
    }
  };
  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h4 className="login__title">Login</h4>
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
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              value={user.password}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </div>
          <button type="submit" className="login__btn">
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
