import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/chat");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password: password,
      });

      localStorage.setItem("token", res.data.jwt);
      alert("Login Successful!");
      router.push("/chat");
    } catch (error: any) {
      alert("Login Failed: " + error?.response?.data?.error?.message || "An unknown error occurred.");
    }
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:1337/api/auth/local/register", {
        username: email.split("@")[0],
        email: email,
        password: password,
      });
      alert("Registration Successful! Please log in.");
    } catch (error: any) {
      alert("Registration Failed: " + error?.response?.data?.error?.message || "An unknown error occurred.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        background: "#F7E6CA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login / Register</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div>
        <button
          onClick={handleRegister}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#E8D59E",
            color: "black",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Register
        </button>
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            background: "#E8D59E",
            color: "black",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
