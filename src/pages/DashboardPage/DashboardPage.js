import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileUpdate from "../ProfileUpdatePage/ProfileUpdatePage";
import searchIcon from "../../assets/icons/search.svg";
import "./DashboardPage.scss";
import meetFriends from "../../assets/images/match-friends.png";
// import { Link } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleMingle = () => {
    setTimeout(() => {
      navigate("/studentCards");
    }, 700);
  };

  const handlePotentialPage = () => {
    setTimeout(() => {
      navigate("/potentialMatches");
    }, 700);
  };

  const handleMyProfile = () => {
    setTimeout(() => {
      navigate("/profileUpdate");
    }, 700);
  };

  const handleMessages = () => {
    setTimeout(() => {
      navigate("/messages");
      // navigate("/messages",{state:{acceptedUser}});

    }, 700);
  };

  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <h1>MingleU</h1>
      </header>

      <div className="dashboard__searchWrapper">
        <h2 className="dashboard__subHeader"> Mingle Dahsboard</h2>

        <label className="dashboard__searchBarLabel" htmlFor="search"></label>
        <input
          type="text"
          id="search"
          className="dashboard__searchInput"
          name="search"
          placeholder="Search..."
        />
        <img
          className="dashboard__searchBarIcon"
          src={searchIcon}
          alt="search icon"
        />
      </div>

      <div className="dashboard__activitiesContainer">
        <h3 className="dashboard__activitiesHeader">Activities</h3>
        <div className="dashboard__activitiesWrapper">
          <ul className="dashboard__activitiesList">
            <li className="dashboard__item" onClick={handleMingle}>
              <p>Mingle Cards</p>
            </li>
            <li className="dashboard__item" onClick={handleMyProfile}>
              My profile
            </li>
            <li className="dashboard__item" onClick={handleMessages}>
              Messages
            </li>
            <li className="dashboard__item" onClick={handlePotentialPage}>
              Potential Matches
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
export default DashboardPage;
