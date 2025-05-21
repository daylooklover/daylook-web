import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: "5rem", fontSize: "1.5rem" }}>
      <h1>Daylook 🌤️</h1>
      <p>오늘은 뭐입지? 지금 바로 코디를 추천받아보세요!</p>
      <Link to="/about">👉 Daylook 소개 보러가기</Link>
    </div>
  );
}
