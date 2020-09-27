import React from "react";
import ReactDOM from "react-dom";
import { QuizContextProvider } from "./Context";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
