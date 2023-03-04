import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";

const Inbox = () => {
  const email = localStorage.getItem("email");
  const sanitizedEmail = email.replace(/[@.]/g, "");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mail-box-client-23c51-default-rtdb.firebaseio.com/${sanitizedEmail}/inbox.json`
      )
      .then((response) => {
        console.log(
          `logging from local inbox ${JSON.stringify(response.data)}`
        );
        setMessages(Object.values(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Inbox</h3>
      <Card className="text-left">
        <ListGroup variant="flush">
          {messages.map((message,index) => (
            <ListGroup.Item key={index}>
            <div>
              {`${message.from}: ${message.subject} - ${message.content}`}
            </div>
          </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Inbox;
