import React, { useState } from "react";

export default function App() {
  const [clothes, setClothes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "상의",
    temp: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClothes([...clothes, form]);
    setForm({ name: "", category: "상의", temp: "", image: null });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>👚 내 옷 등록하기</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="옷 이름" required />
        <select name="category" value={form.category} onChange={handleChange}>
          <option>상의</option>
          <option>하의</option>
          <option>외투</option>
          <option>신발</option>
        </select>
        <input name="temp" value={form.temp} onChange={handleChange} placeholder="적정 온도 (예: 15~20)" required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">저장</button>
      </form>

      <h2>🧥 내 옷장</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {clothes.map((item, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", padding: "1rem", width: "150px" }}>
            {item.image && <img src={item.image} alt="clothing" width="100%" />}
            <p><strong>{item.name}</strong></p>
            <p>{item.category}</p>
            <p>{item.temp}℃</p>
          </div>
        ))}
      </div>
    </div>
  );
}
