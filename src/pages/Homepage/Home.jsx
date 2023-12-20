import { useContext, useState } from "react";
import CourseContext from "../../Context/CourseContext/CourseContext";
import CourseItem from "../../components/Courses/CourseItem";
import style from "./home.module.css";

function Home() {
  const { courses, warning } = useContext(CourseContext);
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div>
      {warning && (
        <div className={style.warningMessage}>
          Item is already added to your cart
        </div>
      )}
      <div className={style.allContainer}>
        <div className={style.searchBarContainer}>
          <h2>Search the course you need to learn</h2>
          <p>Searching makes it easier and saves your time ...</p>
          <div className={style.searchBar}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className={style.searchBtn}>Search</button>
          </div>
        </div>
      </div>
      <div className={style.mainCourseContainer}>
        {courses
          .filter((course) => {
            return search.toLowerCase() === ""
              ? course
              : course.title.toLowerCase().includes(search);
          })
          .map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
}

export default Home;

// return (
//   <div>
//     {warning && (
//       <div className={style.warningMessage}>
//         Item is already added to your cart
//       </div>
//     )}
//     <div className={style.allContainer}>
//       <div className={style.searchBarContainer}>
//         <h2>Search the course you need to learn</h2>
//         <p>Searching makes it easier and saves your time ...</p>
//         <div className={style.searchBar}>
//           <input
//             type="text"
//             placeholder="Search"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button className={style.searchBtn}>Search</button>
//         </div>
//       </div>
//     </div>
//     <div className={style.mainCourseContainer}>
//       {courses.map((course) => (
//         <CourseItem key={course.id} course={course} />
//       ))}
//     </div>
//   </div>
// );
// }
