import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Login from "./components/Form/Login/Login";
import Signup from "./components/Form/SignUp/Signup";
import Taskmanage from "./views/Taskmanage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/taskmanage" element={<Taskmanage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
