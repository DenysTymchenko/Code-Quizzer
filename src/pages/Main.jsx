import React, {useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import videoBg from '../assets/videoBg.mp4';
import "./Main.css"
import axios from "axios";
import QuizCard from "../components/QuizCard/QuizCard";

const h1Styles = {
  textAlign: 'center',
  "@media (max-width:600px)": {
    fontSize: "4rem",
    fontWeight: 600,
  },
}

const h2Styles = {
  textAlign: 'center',
  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
}

const h3Styles = {
  textAlign: 'center',
  marginBottom: 5,
  "@media (max-width:600px)": {
    fontSize: "2.5rem",
  },
}

function Main() {
  let [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get("https://63ef5f59271439b7fe6d10b5.mockapi.io/quizzes");
      setQuizzes(data);
    })();
  }, []);

  return (
    <main>
      <section className="greetings">
        <video src={videoBg} autoPlay loop muted></video>

        <div className="wrapper">
          <Typography variant="h1" gutterBottom sx={h1Styles}>
            Welcome to Quizz App!
          </Typography>

          <Typography variant="h2" gutterBottom sx={h2Styles}>
            Place where you can check your programing skills.
          </Typography>

          <a href="#quizzes">
            <KeyboardDoubleArrowDownIcon style={{width: '50px', height: '50px'}}/>
          </a>
        </div>
      </section>

      <section id="quizzes">
        <Typography variant="h3" sx={h3Styles}>
          Best way to start
        </Typography>

        <div className="wrapper">
          {quizzes.map(quiz => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main;