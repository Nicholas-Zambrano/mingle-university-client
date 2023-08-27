import axios from "axios";
import { useState, useEffect } from "react";

function Users() {
  const [seededUsers, setSeededUsers] = useState([]);
  const url =
    "https://api.pexels.com/v1/search?query=university%20students%20head%20shots&per_page=100";
  const apikey = "hw9BQNs9CRuaZzqFSayHCFC7LWKqnhxlS8VGiMNF1akFlDlt0dqHsPyI";

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/seeded-users`)

      .then((response) => {
        // console.log(`sent the photos : ${response}`);
        const seededUsersData = response.data;
        setSeededUsers(seededUsersData);
      })
      .catch((error) => {
        console.log(`Error sending the photos to the backend`, error);
      });
  }, []);

  return (
    <div>
      <h1>University students</h1>
      <div>
        {seededUsers.map((student) => {
          return (
            <div key={student.id}>
              <img src={student.url} alt={`Photographer: ${student.id}`} />
              <h3>
                Name: {student.first_name} {student.last_name}
              </h3>
              <p>Hobbies: {student.hobbies}</p>
              <p>Course: {student.course}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
