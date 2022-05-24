import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from "./WinScreen.module.css"

const WinScreen = (props) => {
    const clickHandler= () => {
        props.onStartAgain();
    }
    return(
        <Modal onClick = {clickHandler}>
            <div className={styles['win-screen']}>
                <h1>YOU WIN!!!</h1>
                <Button onClick = {clickHandler} label="Try again"></Button>
            </div>
        </Modal>
    )
}
export default WinScreen;