import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QuizProvide } from "./context/quiz";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvide>
      <App/>
    </QuizProvide>
  </React.StrictMode>
);