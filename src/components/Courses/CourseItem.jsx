import style from "./course.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CourseContext from "../../Context/CourseContext/CourseContext";

function CourseItem({ course }) {
  const { handleClick } = useContext(CourseContext);

  return (
    <div className={style.courseContainer}>
      <div className={style.imgContainer}>
        <img src={course.imgUrl} alt="course-image" />
      </div>
      <div className={style.courseContent}>
        <h3>{course.title}</h3>
        <p>{course.desc}</p>
        <button className={style.courseBtn} onClick={() => handleClick(course)}>
          <FaShoppingCart /> Buy
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
