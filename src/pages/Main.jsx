import React, {useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import videoBg from '../assets/videoBg.mp4';
import "./Main.css"
import axios from "axios";
import QuizCard from "../components/QuizCard/QuizCard";

function Main() {
  let [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://63ef5f59271439b7fe6d10b5.mockapi.io/quizzes");
      setQuizzes(data);
    })();
  }, []);


  return (
    <main>
      <section className="greetings">
        <video src={videoBg} autoPlay loop muted></video>

        <div className="wrapper">
          <Typography variant="h1" gutterBottom>
            Welcome to Quizz App!
          </Typography>

          <Typography variant="h2" gutterBottom>
            Place where you can check your programing skills.
          </Typography>

          <a href="#quizzes">
            <KeyboardDoubleArrowDownIcon style={{width: '50px', height: '50px'}}/>
          </a>
        </div>
      </section>

      <section id="quizzes">
        {quizzes.map(quiz => (
          <QuizCard
            key={quiz.id}
            img={quiz.img}
            title={quiz.title}
            description={quiz.description}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;