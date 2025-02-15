import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";

const socket = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL || "wss://real-time-chat-backend-jsqv.onrender.com");

export default function Chat() {
  const [message, setMessage] = useState<string>(""); 
  const [messages, setMessages] = useState<string[]>([]); 
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }

    socket.onmessage = (event) => {
      setMessages((prev: string[]) => [...prev, event.data]); 
    };

    socket.onclose = () => {
      console.log("WebSocket Closed");
    };

    return () => {
      console.log("Closing WebSocket...");
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
        setMessage("");
      } else {
        console.error("WebSocket is not open.");
      }
    }
  };

  return (
    <div style={{ 
        textAlign: "center", 
        background: "#F7E6CA", 
        height: "100vh",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>            
      <h1>Real-Time Chat</h1>

      <div
        style={{
          minHeight: "300px",
          width: "60%",
          margin: "auto",
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
          background: "#ffffff",
          borderRadius: "5px",
        }}
      >
        {messages.map((msg: string, index: number) => ( 
          <p key={index}>{msg}</p>
        ))}
      </div>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
