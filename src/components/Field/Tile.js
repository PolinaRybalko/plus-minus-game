import React, {useEffect,useState} from "react";
import styles from "./Tile.module.css";

const Tile = (props) => {
  const [isFlashed, setIsFlashed] = useState(false); 
  const style = `${styles.button} ${isFlashed ? styles.flashed : ''}`
  useEffect(()=> {
    setIsFlashed(true);
    const timer = setTimeout(()=>{
      setIsFlashed(false)
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [ props.sign]);
  const clickHandler = () => {
    props.onClick(props.columnNumber);
  }
  return (
    <button onClick={clickHandler} className={style}>
      {props.sign}
    </button>
  );
};

export default Tile;
