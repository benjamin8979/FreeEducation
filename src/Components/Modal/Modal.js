import styles from './Modal.module.css';

function Modal(props) {

    function goBackHandler() {
        props.onGoBack();
    }

    return (
        <div className={styles.modal}>
            <iframe className={styles.youtubeVideo}
                src={props.videoLink}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                allowFullScreen
            />
            <button className={styles.goBack} onClick={goBackHandler}>Go Back</button>
        </div>
    );


}

export default Modal;