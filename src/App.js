import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Users from "./components/Users/Users";
import Dashboard from "./pages/DashboardPage/DashboardPage";
import "./partials/_resets.scss";
import ProfileUpdatePage from "./pages/ProfileUpdatePage/ProfileUpdatePage";
import StudentCardPage from "./pages/StudentCardPage/StudentCardPage";
import PotetnialMatchPage from "./pages/PotentialMatchPage/PotentialMatchPage";
import SingleStudentCardPage from "./pages/SingleStudentCardPage/SingleStudentCardPage";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Users/> */}
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studentCards" element={<StudentCardPage />} />
          <Route path="/profileUpdate" element={<ProfileUpdatePage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/potentialMatches" element={<PotetnialMatchPage />} />
          <Route path="/student/:id" element={<SingleStudentCardPage />} />
          <Route path="" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
