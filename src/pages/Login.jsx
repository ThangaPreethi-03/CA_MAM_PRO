import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Entry() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div style={wrap}>
      <div className="glass" style={card}>
        <h1>🎉 Hello Buddy!</h1>
        <p>Your New Year surprise is waiting ✨</p>

        <input
          placeholder="Type your name"
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <button
          onClick={() => {
            localStorage.setItem("name", name || "Friend");
            navigate("/wish");
          }}
        >
          Let’s Celebrate 🎊
        </button>
      </div>
    </div>
  );
}

const wrap = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const card = {
  width: "100%",
  maxWidth: "420px",
  padding: "40px",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "16px",
  border: "none",
  outline: "none",
  margin: "26px 0",
};
