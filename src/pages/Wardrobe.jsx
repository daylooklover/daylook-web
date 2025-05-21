import React, { useState } from "react";

export default function Wardrobe() {
  const [clothes, setClothes] = useState([]);
  const [form, setForm] = useState({ name: "", category: "상의", temp: "", image: null });

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
    <div className="page">
      <h2>👚 내 옷 등록</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="옷 이름" required />
        <select name="category" value={form.category} onChange={handleChange}>
          <option>상의</option>
          <option>하의</option>
          <option>외투</option>
          <option>신발</option>
        </select>
        <input name="temp" value={form.temp} onChange={handleChange} placeholder="적정 온도 (예: 15~20)" required />
        <input
          type="file"
          name="image"
          accept="image/*"
          capture="environment"
          onChange={handleChange}
        />
        <button type="submit">+ 저장</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
        {clothes.map((item, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", width: "180px" }}>
            {item.image && <img src={item.image} alt="옷" style={{ width: "100%", borderRadius: "8px" }} />}
            <p><strong>{item.name}</strong></p>
            <p>{item.category}</p>
            <p>{item.temp}℃</p>
          </div>
        ))}
      </div>
    </div>
  );
}
