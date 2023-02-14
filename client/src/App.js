import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
