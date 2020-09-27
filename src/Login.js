import React, { useContext } from "react";
import { QuizContext } from "./Context";
import { Button } from "react-bootstrap";
import GoogleLogin from "./GoogleLogin";
import { db } from "./firebase";

function Login() {
  const { setUser } = useContext(QuizContext);
  const login = async () => {
    const response = await GoogleLogin();
    const { displayName, email, photoURL } = response;
    const data = {
      displayName,
      email,
      photoURL,
    };

    // Add a new document in collection "cities" with ID 'LA'
    const newUsers = await db.collection("users").doc("users");
    await newUsers.set(
      {
        displayName,
        email,
        photoURL,
        login: true,
      },
      { merge: true }
    );

    setUser({ displayName, email, photoURL });
    //setUser(user);
  };
  return (
    <div className="login">
      <Button onClick={login} variant="dark">
        Login
      </Button>
    </div>
  );
}

export default Login;
