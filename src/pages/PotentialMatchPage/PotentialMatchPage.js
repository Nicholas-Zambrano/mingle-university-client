import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function PotetnialMatchPage() {
  const [potentialMatches, setPotentialMatches] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/potential-match/get")
      .then((response) => {
        setPotentialMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(potentialMatches);

  return (
    <div>
      <h1>Potential Matches</h1>
      <ul>
        {potentialMatches.map((match) => {
          return (
            <li key={match.id}>
              <Link to={`/`}>
                {match.first_name}
                {match.last_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default PotetnialMatchPage;
