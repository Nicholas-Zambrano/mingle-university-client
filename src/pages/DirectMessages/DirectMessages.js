import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
function DirectMessages() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    {
      role: "user",
      content: "Hello!",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = process.env.API_KEY;
  const { id } = useParams();

  const requestData = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  useEffect(() => {
    // const selectedUserId = userId
    fetchUserInfo();
  }, []);

  const fetchUserInfo = () => {
    axios
      .get(`http://localhost:8080/student/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Failed to get user info", error);
      });
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    const message = newMessage;

    // adding new messages to state variable
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
    ]);

    // updating the requestData object with the updated messages
    const updatedRequestData = {
      ...requestData,
      messages: messages,
    };

    axios
      .post(API_URL, updatedRequestData, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    setMessages("");
  };

  return (
    <div>
      <h1>Direct Messaging</h1>

      {messages.map((message, index) => {
        return (
          <div key={index}>
            {message.role === "system" && <p>{message.content}</p>}
            {message.role === "user" && <p>User: {message.content}</p>}
            {message.role === "assistant" && (
              <p>Assistant: {message.content}</p>
            )}
          </div>
        );
      })}

      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => {
            setNewMessage(event.target.value);
          }}
        />
        <button type="" submit>
          Send
        </button>
      </form>
    </div>
  );
}

export default DirectMessages;
