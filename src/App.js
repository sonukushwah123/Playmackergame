import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Report from "./Pages/Report";
import ResetPassword from "./Pages/ResetPassword";
import SignUp from "./Pages/SignUp";
import Contest from "./Pages/Contest";
import { Forgot } from "./Pages/Forgot";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contest/:id" element={<Contest />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
