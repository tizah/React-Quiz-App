import React, { useContext } from "react";
import Quiz from "./Quiz";
import Header from "./Header";
import { QuizContext } from "./Context";

export default function App() {
  const { user } = useContext(QuizContext);
  return (
    <>
      {Object.keys(user).length === 0 ? null : <Header />}
      <div className="content">
        <Quiz />
      </div>
    </>
  );
}
