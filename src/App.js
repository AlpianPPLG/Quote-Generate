import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  const handleGetAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { slip } = response.data;

      setAdvice(slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1 className="app__title" onClick={() => {window.location.reload();}}>Advice Generator</h1>
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={handleGetAdvice}>
          <span>Give Me Advice</span>
        </button>
      </div>
      <div className="card__footer">
        <p className="footer__text">
          Made with love by{" "}
          <a
            href="https://github.com/AlpianPPLG"
            target="_blank"
            rel="noopener noreferrer"
          >
            AlpianPPLG
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;