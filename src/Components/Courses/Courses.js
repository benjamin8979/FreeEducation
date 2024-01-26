import Course from '../Course/Course';
import styles from './Courses.module.css';

function Courses(props) {

    let courseArr = [];

    props.arr.forEach(element => {
        courseArr.push(<Course colorID={props.colorID} key={element["thumbnail"]} name={element["lecture"]} school={element["university"]} video={element["link"]}/>);
    });

    return (
        <div id={props.coursePage} className={styles.coursePage}>
            <button id="back" className={styles.back} onClick={() => {
                props.changePage("mainPage");
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                BACK
            </button>
            <div className={styles.courses}>
                {courseArr}
            </div>
        </div>
    );
}

export default Courses;