import React from "react";

export default function Home() {
  return (
    <div className="page">
      <img src="/logo.png" alt="Daylook 로고" style={{ width: "120px", marginBottom: "1rem" }} />
      <h1>DAYLOOK</h1>
      <p style={{ fontSize: "1.3rem", color: "#666" }}>오늘은 뭐입지?</p>
      <p>당신의 하루 코디를 AI가 함께 고민해드립니다 💛</p>
    </div>
  );
}
