import React, { useState, createContext } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = (props) => {
  const [user, setUser] = useState({});

  return (
    <QuizContext.Provider value={{ user, setUser }}>
      {props.children}
    </QuizContext.Provider>
  );
};
