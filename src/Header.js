import React, { useContext } from "react";
import { QuizContext } from "./Context";
import { Button, Navbar, Image } from "react-bootstrap";
function Header() {
  const { user } = useContext(QuizContext);
  // if (user) {
  console.log(user);
  // }
  return (
    <Navbar bg="light" expand="lg">
      <p>The Quiz App</p>
      <div className="header">
        <h3>{user.displayName}</h3>
        <Image src={user.photoURL} roundedCircle />
      </div>
    </Navbar>
  );
}

export default Header;
