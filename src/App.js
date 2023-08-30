import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Users from "./components/Users/Users";
import Dashboard from "./components/Dashboard/Dashboard";
import "./partials/_resets.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Users/> */}
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>}/>

          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
