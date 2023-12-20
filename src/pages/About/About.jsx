import style from "./about.module.css";
import {
  FaClock,
  FaChalkboardTeacher,
  FaUsers,
  FaRegEdit,
} from "react-icons/fa";

function About() {
  return (
    <div>
      <div className={style.about}>
        <h2>About Me</h2>
        <h4>Behnam Hamidi | FullStack WebDeveloper</h4>
        <p>
          My name's Behnam and I'm a computer engineer and also prgoramming
          instructor. I've started working in this area since 2018 and I'm
          mostly working in the area of Frontend, Javascript and ReactJs.
          Teaching is one of my passions 'cause through teaching it's possible
          to learn more, gain new experience and most importantly get to know to
          new people.
        </p>

        <div>
          <ul className={style.skills}>
            <li className={style.listSkill}>
              {" "}
              <FaClock /> 326 Projects
            </li>
            <li className={style.listSkill}>
              {" "}
              <FaChalkboardTeacher /> 12 Courses
            </li>
            <li className={style.listSkill}>
              {" "}
              <FaUsers /> 876 Students
            </li>
            <li className={style.listSkill}>
              {" "}
              <FaRegEdit /> +500 Repositories
            </li>
          </ul>

          <ul className={style.experiences}>
            <h4>Experiences and Projects</h4>
            <li>Working in a project with ClickOn</li>
            <li>Lead Senior Frontend Developer at Manhattan Project</li>
            <li>Part-time in a freelancing team group</li>
            <li>
              Working as a full-stack developer with a high-tech project in LA
            </li>
            <li>Lead Senior Frontend Developer at Manhattan Project</li>
            <li>Working in a project with ClickOn</li>
          </ul>

          <button className={style.contactBtn}>Contact Me Directly</button>
        </div>
      </div>
    </div>
  );
}

export default About;
