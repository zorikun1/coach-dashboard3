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
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>📁 העלאת לקוח חדש</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>שם הלקוח:</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="לדוגמה: מייקל משה"
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>הערות המאמן:</label>
        <textarea
          value={clientNote}
          onChange={(e) => setClientNote(e.target.value)}
          placeholder="רגיש ללקטוז, רוצה לרדת 5 ק״ג, שונא ריצה..."
          rows={3}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <button onClick={handleAddClient} style={{ padding: "10px 20px" }}>
        📤 שמור לקוח
      </button>

      <hr style={{ margin: "2rem 0" }} />

      <h2>🧍 לקוחות קיימים:</h2>
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