import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

function Dashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [failedAuth, setFailedAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setFailedAuth(true);
      return;
    }

    axios
      .get("http://localhost:8080/my-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(true);
        setFailedAuth(true);
      });
  }, []);

  //   you can handle logout here
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (failedAuth) {
    return (
      <main className="dashboard">
        <h2>You must have an account to see this page</h2>
        <Link to="/loginPage"> Log in</Link>
      </main>
    );
  }
  if (isLoading) {
    return (
      <main>
        <h2>Loading</h2>
      </main>
    );
  }

  return (
    <main>
      <h1> My profile </h1>
      <p>Welcome, {data.first_name}</p>
      <ProfileUpdate/>

    </main>
  );
}
export default Dashboard;
