import style from "./footer.module.css";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const copyRightDate = new Date().getFullYear();

  return (
    <footer className={style.footerParent}>
      <h2 className={style.topHeader}>Follow us in social network</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, id?
      </p>

      <div className={style.socialNetworkContainer}>
        <ul className={style.socialUl}>
          <li className={style.itemLi}>
            <a href="#">
              <FaInstagram />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaFacebook />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaLinkedin />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaTelegram />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaTwitter />{" "}
            </a>
          </li>
        </ul>
      </div>

      <div className={style.footer}>
        <ul className={style.linkContainer}>
          <h4>Easy Access To Links</h4>

          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Homepage
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> About
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Blog
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Contact
          </Link>
        </ul>

        <ul className={style.linkContainer}>
          <h4>Contact links</h4>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Support
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Teachers
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Manager
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Finance
          </Link>
        </ul>

        <ul className={style.linkContainer}>
          <h4>Community</h4>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Announcements
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Answer center
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Discussion boards
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Groups
          </Link>
        </ul>

        <ul className={style.linkContainer}>
          <h4>Instructors</h4>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> John Doe
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Fillip Morgan
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Antony William
          </Link>
          <Link href="#" className={style.linkItem}>
            <FaChevronRight className={style.icon} /> Jane Doe
          </Link>
        </ul>
      </div>

      <div className={style.copyRight}>
        Copyright {copyRightDate} All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
