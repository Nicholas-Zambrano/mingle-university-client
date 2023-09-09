import { useEffect, useState } from "react";
import axios from "axios";
import "./MessagesPage.scss";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [friendInfo, setFriendInfo] = useState(null); // State to store friend's information

  const [acceptedUser, setAcceptedUser] = useState([]);

  const navigate = useNavigate();
  

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

  // navigating to those specific students
  const handleNavigation = (userId) => {
    // navigate(`/messages/${userId}`);
    window.location.href = `messages/${userId}`;
  };
  console.log(acceptedUser);
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
        <div className="message__friendWrapper">
          {acceptedUser.map((user) => {
            return (
              <div
                className="message__friend"
                onClick={() => handleNavigation(user.receiver_id)}
              >
                {user.first_name} {user.last_name}
              </div>
              // </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
