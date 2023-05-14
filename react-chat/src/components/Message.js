import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Message({ message }) {
  const [user] = useAuthState(auth); // Grab the authentication information

  // If message is sent by the user, add a class to set the message to the right. Otherwise, the message will display to the left by default.
  // Add the user's image
  // Display their name, and their message.
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
}
