import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

export default function ChatBox() {
  const [messages, setMessages] = useState([]); // Creates a state as an empty array, which will contain all our messages from the database.
  const scroll = useRef(); // Create a reference point when the component needs to scroll.

  useEffect(() => {
    // Query our database for up to 50 messages, ordered by the createdAt key (time created).
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    // Listens for changes in the doucment. Contains an empty array called messages.
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];

      // Loops through the documents from the collection and saves the data to the "messages" array.
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  // Map each message to create its own "message" component.
  // Create a span element which will reference when the page needs to scroll to display the most up-to-date message.
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
}
