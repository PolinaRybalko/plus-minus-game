import styles from "./Header.module.css"
import React from "react";
import Button from "../UI/Button";

const Header = (props) => {
    const clickHandler =() => {
          props.onStartGame();
    }
    return(
        <div className={styles.header}>
            <h1 className = {styles.title}>Plus-Minus Game!</h1>
            {!props.isStarted && <Button onClick={clickHandler} label={"Start!"}/>}
        </div>)
}

export default Header;