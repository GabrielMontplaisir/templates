import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function SendMessage({ scroll }) {
  const [message, setMessage] = useState(""); // Use State from React to update the user message as they type it.

  const handleChange = (e) => setMessage(e.target.value); // Handler function as the user types their message
  const handleSubmit = (e) => send(e); // Handler function when the user sends their message

  const send = async (event) => {
    event.preventDefault(); // Don't update page.

    if (message.trim() === "") {
      return;
    } // Ensures we don't save empty strings or messages to the database.

    const { uid, displayName, photoURL } = auth.currentUser; // Get the user's data from their authentication.
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    }); // Adds the following info to the database: the message, the person's name, their photo, the server time and the user ID. If the collection doesn't exist, it will create it for us.
    setMessage(""); // Once everything is completed, it resets the message state to an empty string.
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={handleSubmit} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={handleChange}
      />
      <IconButton aria-label="Send message" type="submit">
        <SendIcon />
      </IconButton>
    </form>
  );
}
