import styles from './Splash.module.css';

//Click chevron to move to subjects page

function Splash() {

    // let lastScroll = 0;
    // window.onscroll = function() {
    //     if (document.documentElement.scrollTop > lastScroll) {
    //         lastScroll = document.documentElement.scrollTop;
    //     }
    //     else {
    //         lastScroll = document.documentElement.scrollTop;
    //     }
    // }

    return (
        <div className={styles.splash} id="mainPage">
            <p className={styles.blurb}>College is becoming ever more expensive, but it 
            is also true that great college courses, for free, are just a click 
            away...</p>
            <span className={styles.scroll}>SCROLL DOWN TO EXPLORE</span>
            <span className={styles.arrow}>
                <a className={styles.scrollLink} href="#subjectPage">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
                </a>
            </span>
        </div>
    );
}

export default Splash;