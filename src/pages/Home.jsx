import React from "react";

export default function Home() {
  return (
    <div className="page">
      <img src="/logo.png" alt="Daylook 로고" style={{ width: "100px", marginBottom: "1rem" }} />
      <h1>DAYLOOK</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>오늘은 뭐입지?</p>
      <p>AI가 오늘의 날씨와 당신의 옷장을 분석해 코디를 추천해드립니다!</p>
    </div>
  );
}
