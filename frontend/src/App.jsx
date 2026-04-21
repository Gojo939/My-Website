import { Route, Routes } from "react-router-dom";
import './App.css'
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import UserProfile from "./component/UserProfile";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Profile from "./component/Profile";


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="user/:name" element={<UserProfile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default App;
