import axios from "axios";
import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import ProfileUpdate from "../ProfileUpdatePage/ProfileUpdatePage";
import searchIcon from "../../assets/icons/search.svg";
import "./DashboardPage.scss";
import meetFriends from "../../assets/images/match-friends.png";

function DashboardPage() {
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

      <div>
        <h3 className="dashboard__activitiesHeader">Activities</h3>
        <div className="dashboard__activitiesWrapper">
          <ul className="dashboard__activitiesList">
            <li className="dashboard__item">
              {/* <img className="dashboard__icon" src={meetFriends} /> */}
              <p>Mingle Cards</p>
            </li>
            <li className="dashboard__item">My profile</li>
            <li className="dashboard__item">Messages</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
export default DashboardPage;
