import styles from './Subject.module.css';


function Subject(props) {

    return (
        <button className={styles.subject} id={props.id} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default Subject;