import Field from "./components/Field/Field";
import styles from "./App.module.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import WinScreen from "./components/Layout/WinScreen";


function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isWinner, setisWinner] = useState(false);
  const startGameHandler = () => {
    setIsStarted(true);
  };
  const userWinsHandler = () => {
    setisWinner(true);
  };
  const startAgainHandler = () => {
    setisWinner(false);
    setIsStarted(false);
  };
  
  return (
    <div className={styles.game}>
      {isWinner && <WinScreen onStartAgain={startAgainHandler} />}
      <Header onStartGame={startGameHandler} isStarted={isStarted} />
      <div className={styles["field-container"]}>
        {isStarted && <Field onUserWins={userWinsHandler} isStarted={isStarted}></Field>}
      </div>
    </div>
  );
}

export default App;
