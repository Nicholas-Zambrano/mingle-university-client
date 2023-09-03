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

  /* this new array will not contain duplicates
   self is the array being iterated
   find index- check if the current match has a unique id with array
*/
  const uniqueMatches = potentialMatches.filter((match, index, self) => {
    return index === self.findIndex((m) => m.id === match.id);
  });

  return (
    <div>
      <h1>Potential Matches</h1>
      <ul>
        {uniqueMatches.map((match) => {
          return (
            <li key={match.id}>
              <Link to={`/student/${match.id}`}>
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
