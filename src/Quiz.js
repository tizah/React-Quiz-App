import React, { useEffect, useState, useContext } from "react";

import { QuizContext } from "./Context";

import { db } from "./firebase";

import Login from "./Login";
import Particles from "react-particles-js";

function Quiz() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const { user } = useContext(QuizContext);
  // if (user) {
  console.log(Object.keys(user).length === 0);
  // }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const questionRef = db.collection("questions");
      const snapshot = await questionRef.get();

      const questions = snapshot.docs.map((doc) => {
        return doc.data();
      });
      console.log(questions);
      setQuestions(questions);
    };

    fetchData();
    setLoading(false);
  }, [setLoading]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <div className="app">
        {Object.keys(user).length === 0 ? (
          <Login />
        ) : (
          questions &&
          (showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
}

export default Quiz;
