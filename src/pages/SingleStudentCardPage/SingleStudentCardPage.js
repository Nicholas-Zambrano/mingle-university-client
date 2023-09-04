import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import StudentCard from "../../components/StudentCard/StudentCard";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./SingleStudentCardPage.scss";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function SingleStudentCardPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [comment, setComment] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleFriendRequestAccepted = () => {
    setTimeout(() => {
      toast.success("Friend request accepted!!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 8000,
        // when clicking on notification - redirect to messages page
        onClick: () => {
          console.log("Redirecting to messages page");

          navigate("/messages");
        },
      });
    }, 20000);
  };
  const handleAutoAccept = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `http://localhost:8080/auto-accept/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${id}`)
      // .get(`http://localhost:8080/potetntial-match/get`)
      .then((response) => {
        console.log(response);

        setStudent(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSendFriendRequest = () => {
    const token = localStorage.getItem("token");
    // POST request to send the friend request and the comment to that specific user id
    axios
      .post(
        `http://localhost:8080/send-friend-request/${id}`,
        { comment },
        {
          /**
           * authenticating the request and verify that the sender is authorized to send the friend request
           */
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle the success or show a confirmation message
        setShowModal(false); // Close the modal after sending the request
        alert("Friend request sent successfully!");
        handleAutoAccept();
        handleFriendRequestAccepted();
        // console.log(handleFriendRequestAccepted());
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send friend request. Please try again.");
      });
  };

  console.log("Student ID:", id);

  console.log("hello");
  console.log(student);
  // console.log(setStudent);

  return (
    <div className="singleStudent">
      <div className="singleStudent__header">
        <Link className="singleStudent__headerLink" to="/dashboard">
          <h1 className="singleStudent__title">MingleU</h1>
        </Link>
      </div>

      <div className="singleStudent__subheaderWrapper">
        <ArrowBack />

        <h2 className="singleStudent__subheader">Single student</h2>
      </div>

      {student ? (
        <div className="studentCard__info singleStudent__wrapper">
          <img
            className="studentCard__image singleStudent__image"
            src={student.url}
            alt={student.id}
          />
          <div className="studentCard__details">
            <h2 className="studentCard__name">{student.first_name}</h2>
            <p className="studentCard__hobbies">{`Hobbies: ${student.hobbies}`}</p>
            <p className="studentCard__course">{`Studying: ${student.course}`}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="singleStudent__friendButtonWrapper">
        {/* when button is cliked - set modal to true  */}
        <button
          className="singleStudent__requestButton"
          onClick={() => setShowModal(true)}
        >
          Send Friend Request
        </button>
      </div>
      {/* 
      if the show modal is true (if the button was clicked)
      then renders the content
      */}
      {showModal && (
        <div className="singleStudent__modal">
          <div className="singleStudent__modalContent">
            {/* <h2>Send Friend Request</h2> */}
            <textarea
              placeholder="Write a message..."
              className="singleStudent__textArea"
              value={comment}
              onChange={(e) => setComment(e.target.value)} // inputting text
            ></textarea>
            {/* if send request is clicked in modal then function is called
            - if the cancel button is selected then it closes the modal
            */}
            <div className="singleStudent__modalButtonWrapper">
              <button
                className="singleStudent__modalButton"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="singleStudent__modalButton"
                onClick={handleSendFriendRequest}
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleStudentCardPage;
