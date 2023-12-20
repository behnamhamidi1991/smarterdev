import style from "./found.module.css";
import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function NoteFound() {
  return (
    <div className={style.container}>
      <h1>Oops!</h1>
      <h4>This page doesn't exist :( </h4>
      <Link className={style.homeBtn} to="/">
        {" "}
        <BiSolidHome /> Go Back To Homepage
      </Link>
    </div>
  );
}

export default NoteFound;
