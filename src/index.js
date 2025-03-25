import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div style={{ textAlign: "center", paddingTop: "3rem" }}><h1>המערכת פועלת! 💪</h1></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);