import React, { useEffect, useState } from "react"; 
import { useRouter } from "next/router";

const socket = new WebSocket("ws://localhost:8080");

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  socket.onmessage = (event) => {
    console.log("📩 Message from server:", event.data); 
    setMessages((prev) => [...prev, event.data]);
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

      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 15px",
          background: "#E8D59E",
          color: "black",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>

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
      <div style={{ 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  gap: "10px",
  marginTop: "20px" // ✅ Adds spacing between chat & input
}}>

  <input
    type="text"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Type a message..."
    style={{ padding: "10px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" }}
  />
    <button
    onClick={sendMessage}
    style={{
        padding: "10px 20px",
        background: "#E8D59E",
        color: "black",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        width: "fit-content", // ✅ Fix for auto-sizing
        minWidth: "100px", // ✅ Ensures a proper button size
        display: "inline-block", // ✅ Prevents it from taking full width
    }}
    >
    Send
    </button>
    </div>
        </div>
  );
}
