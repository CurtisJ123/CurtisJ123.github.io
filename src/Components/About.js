import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Curtis Jones</b>, and I'm from{" "}
            <b>Cincinnati, Ohio</b>. I'm a <b>Sofware Developer</b> with a
            passion for solving problems, building useful software, and
            constantly learning new technologies.
            <br />
            <br />
            I'm currently pursuing a{" "}
            <b>Master of Science in Computer Science</b> with a focus in Machine
            Learning at Georgia Tech (expected May 2027) and recently completed
            a <b>Bachelor of Science in Computer Science</b> at Western
            Governors University.
            <br />
            <br />
            I’ve built several projects, including a job tracking app, a file
            system visualizer, and a Discord bot. I love exploring new tech
            stacks and have experience in everything from <b>
              React and Node
            </b>{" "}
            to <b>C++, C#, and Python</b>.
            <br />
            <br />
            I’m always <b>open</b> to collaboration, freelance work, or new
            opportunities where I can grow and contribute. Feel free to reach
            out — my contact info is in the footer!
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="C#" />
        <Skills skill="Java" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="Javascript" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
        <Skills skill="PostgreSQL" />
        <Skills skill="MySQL" />
        <Skills skill="MongoDb" />
      </div>
    </>
  );
};

export default About;
