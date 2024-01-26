import { useState } from 'react';
import styles from './App.module.css';
import Splash from './Components/Splash/Splash';
import Subjects from './Components/Subjects/Subjects';
import Courses from './Components/Courses/Courses';

function App() {

  const states = {
    "bioPage": 0,
    "psychPage": 1,
    "physPage": 2,
    "hisPage": 3,
    "litPage": 4,
    "csPage": 5,
    "mathPage": 6,
    "socPage": 7
  }

  const colorID = {
    "bioPage": "bio",
    "psychPage": "psych",
    "physPage": "phys",
    "hisPage": "his",
    "litPage": "lit",
    "csPage": "cs",
    "mathPage": "math",
    "socPage": "soc"
  }

  const [pageState, setPageState] = useState("mainPage");

  const [dataArray, setDataArray] = useState(null);

  let display;

  function updatePage(page) {
    setPageState(page);
  }

  async function getData() {
    if (dataArray == null) {
      const response = await fetch("https://api.jsonbin.io/v3/b/65af68671f5677401f23915b", {
      method: "get",
      headers: {
        "Content-type": "application/json",
        "X-Access-Key": "$2a$10$jpWhU/3VTe6WpU1qpEpdUOckbY4Mi5apKUmKUF1y5p/EAEonSvhHe"
      }
      });
      const data = await response.json();
      setDataArray(data.record.data)
    }
    
  }

  getData().then(
    console.log(dataArray)
  );


  if (pageState === "mainPage") {
    display =[<Splash key="splash"/>, <Subjects key="subjects" changePage={updatePage}/>];
  }
  else {
    let key = `course${pageState}`
    display = [<Courses key={key} colorID={colorID[pageState]} arr={dataArray[states[pageState]]} changePage={updatePage}/>]
  }
  

  return (
    <div className={styles.App}>
      <div id={pageState} className={styles.mainPage}>
        {dataArray ? display : <h1 className={styles.loading}>Loading...</h1>}
      </div>
    </div>
    
  );
}

export default App;
