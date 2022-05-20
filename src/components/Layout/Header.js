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
            {!props.isStarted && <Button onClick={clickHandler} label={"Start!"}/> }
            {props.isStarted &&  <p> Make all signs the same </p> }
            
        </div>)
}

export default Header;