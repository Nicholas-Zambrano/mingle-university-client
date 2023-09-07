import { useEffect, useState } from "react";
import axios from "axios";
import "./MessagesPage.scss";
import { Link, useLocation, useParams } from "react-router-dom";

function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [friendInfo, setFriendInfo] = useState(null); // State to store friend's information

  const [acceptedUser, setAcceptedUser] = useState([]);

  //
  useEffect(() => {
    axios
      .get(`http://localhost:8080/accepted-users`)
      .then((respsonse) => {
        setAcceptedUser(respsonse.data);
        console.log(respsonse.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="message">
      <div className="message__header">
        <Link className="message__headerLink" to="/dashboard">
          <h1 className="message__title">MingleU</h1>
        </Link>
      </div>

      <div className="message__wrapper">
        <div className="message__subheaderWrapper">
          <h1 className="message__subheader">Chat with Friends</h1>
        </div>
        <div>
          {acceptedUser.map((user) => {
            return (
              <Link
                key={user.id}
                to={`/messages/${user.id}`}
                className="message__firendLink"
              >
                <div className="message__friend">
                  {user.first_name} {user.last_name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
