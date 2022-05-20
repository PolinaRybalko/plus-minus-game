import styles from "./Row.module.css";
import Tile from "./Tile";

const Row = (props) => {
    const clickHandler = (column) => {
        props.onClick( props.rowNumber, column);
    }
    const signButtons = props.signs.map((tile, id) => {
        return(<Tile  onClick={clickHandler} key = {`b${id}`} columnNumber = {id} sign = {tile}>  </Tile>);
    })
  return <div className={styles.row}> {signButtons} </div>;
};

export default Row;
