import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [clientName, setClientName] = useState("");
  const [clientNote, setClientNote] = useState("");
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem("clients");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddClient = () => {
    if (!clientName) return;

    const newClient = {
      name: clientName,
      note: clientNote,
    };

    const updatedClients = [...clients, newClient];
    setClients(updatedClients);
    localStorage.setItem("clients", JSON.stringify(updatedClients));

    setClientName("");
    setClientNote("");
  };

  return (
    <div dir="rtl" style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif", backgroundColor: "#f8f8f8", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center" }}>📁 הוספת לקוח חדש</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>שם הלקוח:</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="למשל: גל זורמן"
          style={{ width: "100%", padding: "10px", marginTop: "6px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>הערות:</label>
        <textarea
          value={clientNote}
          onChange={(e) => setClientNote(e.target.value)}
          placeholder="קשה לו להתמיד, אוהב לאכול מתוק בערב..."
          rows={3}
          style={{ width: "100%", padding: "10px", marginTop: "6px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
      </div>

      <button onClick={handleAddClient} style={{ padding: "12px 24px", border: "none", backgroundColor: "#0070f3", color: "#fff", borderRadius: "8px", cursor: "pointer" }}>
        📤 שמור לקוח
      </button>

      <hr style={{ margin: "2rem 0" }} />

      <h2>👥 לקוחות שמורים</h2>
      {clients.length === 0 ? (
        <p>אין לקוחות עדיין.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {clients.map((client, index) => (
            <li key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
              <strong>{client.name}</strong>
              <p>{client.note}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);