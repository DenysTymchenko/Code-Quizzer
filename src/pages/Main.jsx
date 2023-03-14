import React from "react";
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import videoBg from '../assets/videoBg.mp4';
import "./Main.css"

function Main() {
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

      <section id="quizzes"></section>
    </main>
  )
}

export default Main;