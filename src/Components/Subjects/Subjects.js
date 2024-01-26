import Subject from '../Subject/Subject';
import styles from './Subjects.module.css';

function Subjects(props) {
    return (
        <div className={styles.subjects} id="subjectPage">
            <h2>SELECT A SUBJECT TO GET STARTED</h2>
            <Subject id={styles.bio} name="Biology" onClick={() => props.changePage("bioPage")}/>
            <Subject id={styles.psych} name="Psychology" onClick={() => props.changePage("psychPage")}/>
            <Subject id={styles.phys} name="Physical Science" onClick={() => props.changePage("physPage")}/>
            <Subject id={styles.his} name="History" onClick={() => props.changePage("hisPage")}/>
            <Subject id={styles.lit} name="Literature" onClick={() => props.changePage("litPage")}/>
            <Subject id={styles.cs} name="Computer Science" onClick={() => props.changePage("csPage")}/>
            <Subject id={styles.math} name="Mathematics" onClick={() => props.changePage("mathPage")}/>
            <Subject id={styles.soc} name="Social Science" onClick={() => props.changePage("socPage")}/>

        </div>
    );
}

export default Subjects;