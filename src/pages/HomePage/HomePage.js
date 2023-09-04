import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <header className="homePage__header">
        <h1 className="homePage__title">MingleU</h1>
        <p className="homePage__catchyLine">
          Connect with Like-minded Students!
        </p>
      </header>

      <section className="homePage__hero">
        <div className="homePage__buttonsWrapper">
          <Link to="/loginPage" className="login-link">
            Log In
          </Link>
          <Link to="/signupPage" className="login-link">
            Sign Up
          </Link>
        </div>
      </section>

      <footer className="homePage__footer">
        <p className="homePage__footerText">
          &copy; 2023 MingleU. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
