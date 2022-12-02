import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Para from "./Demo/para";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowTog, setShowToggle] = useState(false);

  console.log(`State changed`);

  const toggleButton = useCallback(() => {
    if (allowTog) setShowParagraph((prevState) => !prevState);
  }, [allowTog]);

  const allowToggle = () => {
    setShowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Para show={showParagraph}></Para>
      <Button onClick={allowToggle}>Allow Toggle me</Button>
      <Button onClick={toggleButton}>Toggle me</Button>
    </div>
  );
}

export default App;
