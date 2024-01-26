import { useState } from 'react';
import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Course.module.css';

function Course(props) {
    const [modalOpen, setModalOpen] = useState(false);
    
    function openModalHandler() {
        setModalOpen(true);
    }

    function closeModalHandler() {
        setModalOpen(false);
    }

    return (
        <div className={styles.courseDiv} id={`${styles[props.colorID]}`}>
            <label className={styles.course} onClick={openModalHandler}>{props.name}</label>
            {modalOpen ? <Modal videoLink={props.video} onGoBack={closeModalHandler}/> : null}
            {modalOpen ? <Backdrop onClick={closeModalHandler}/> : null}
            
        </div>
    );
}

export default Course;
