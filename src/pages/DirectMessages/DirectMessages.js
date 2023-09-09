import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import "./DirectMessages.scss";
function DirectMessages() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Hey there! You're my new university friend. We are both teenagers 18 years old. Feel free to chat like a human 😊, so do not metion that you are an AI just go with the flow with the converstation, and we have not yet started university hence why we are on this app MingleU, MingleU is an application for new incoming university students to connect with their future peers who will be studying the same courses,hobbies and interests.This app is aimed to create a community for students, e.g my application will allow them to already join societies, which eventually leads to building and establishing relationships before their first year begins. So that they can have a better university experience and make jokes be funny and be up to date with the vocabulary and the funny vocabulary as we are getting to know each other, you understand teenage vocaulary such as wassup and calm etc and jamiacan slang like wagwan. and you will always respond regardless and be funny and make jokes if you dont understand and dont take things seriously in the converstation , and respond with short sentences like one sentence and send emojis and memes and funny gifs and speack like a teenager with slang. you need to respond to anything dont ignore the message and takes jokes and respond to anything thats rude with a funny joke",
    },
    {
      role: "user",
      content: "Hello!",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const API_URL = "https://api.openai.com/v1/chat/completions";
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // // const API_KEY ="rchcLSy4acNt3ucDGBqVT3BlbkFJvBqiIM0khjBCsUzJwx63"
  const API_KEY = "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";
  const { id } = useParams();

  const [user, setUser] = useState("");

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
        // setMessages(response.data.messages);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Failed to get user info", error);
      });
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    const message = newMessage;

    const newMessages = [...messages, { role: "user", content: message }];

    setMessages(newMessages);

    // // adding new messages to state variable
    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   { role: "user", content: message },
    // ]);

    // updating the requestData object with the updated messages
    const updatedRequestData = {
      ...requestData,
      messages: newMessages,
    };

    axios
      .post(API_URL, updatedRequestData, { headers })
      .then((response) => {
        console.log(response.data);
        const assistantMessage = {
          role: "assistant",
          content: response.data.choices[0]?.message?.content || "", // Access the response message from the API
        };

        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      })
      .catch((error) => {
        console.error(error);
      });

    setNewMessage("");
  };

  return (
    <div className="directMessages">
      <div className="directMessages__header">
        <Link className="directMessages__headerLink" to="/dashboard">
          <h1 className="directMessages__title">MingleU</h1>
        </Link>
      </div>

      <div className="directMessages__subheaderWrapper">
        <ArrowBack />

        <div className="directMessages__subheader">
          <h2>Direct Messaging</h2>
        </div>
      </div>
      <div className="directMessages__chatContainer">
        <h3 className="directMessages__friend">{user.first_name}</h3>

        {messages ? (
          messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? "directMessages__message directMessages__message--user"
                  : "directMessages__message directMessages__message--assistant"
              }
            >
              {message.role === "user" && (
                <p className="directMessages__messageContent">
                  Nick: {message.content}
                </p>
              )}
              {message.role === "assistant" && (
                <p className="directMessages__messageContent">
                  {user.first_name} {user.last_name}: {message.content}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>Loading messages</p>
        )}

        <form
          onSubmit={handleSendMessage}
          className="directMessages__inputForm"
        >
          <input
            type="text"
            className="directMessages__inputField"
            value={newMessage}
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
          />
          <button type="submit" className="directMessages__sendButton">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default DirectMessages;
