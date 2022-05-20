import styles from './Modal.module.css'

const Modal = (props) => {
return(
    <div className = {styles.backdrop} onClick={props.onClick}>
        <div className = {styles.modal} >
            {props.children}
        </div>
    </div>
)
}

export default Modal;