import style from "./cart.module.css";
import {
  FaShoppingBasket,
  FaDollarSign,
  FaUserGraduate,
  FaTasks,
  FaTrash,
} from "react-icons/fa";
import { useContext } from "react";
import CourseContext from "../../Context/CourseContext/CourseContext";

function Cart() {
  const { cart, deleteCourse } = useContext(CourseContext);

  return (
    <div className={style.cartPageContainer}>
      <div className={style.logoContainer}>
        <FaShoppingBasket className={style.logo} />
        <p>
          {cart.length === 1
            ? "There is 1 item in your cart"
            : cart.length === 0
            ? "There are no items in your cart"
            : `There are ${cart.length} items in your cart`}
        </p>
      </div>
      <div className={style.cartContainer}>
        {cart.map((item) => (
          <div key={item.id} className={style.cart}>
            <img src={item.imgUrl} alt="course-image" />
            <div className={style.contentContainer}>
              <button
                className={style.trashIcon}
                onClick={() => deleteCourse(item.id)}
              >
                <FaTrash />
              </button>
              <h2 className={style.courseTitle}>{item.title}</h2>
              <p className={style.desc}>{item.desc}</p>
              <div className={style.infobox}>
                <h4 className={style.price}>
                  {" "}
                  <FaDollarSign /> {item.price}
                </h4>
                <h4 className={style.completed}>
                  <FaTasks />{" "}
                  {item.completed === true ? "completed" : "Not completed"}
                </h4>
                <h4 className={style.students}>
                  <FaUserGraduate /> Students: {item.students}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={
          cart.length === 0 ? style.cartFinalHidden : style.cartFinalContainer
        }
      >
        <h4>Go to the next step to complete your order</h4>
        <div className={style.cartFinalButtons}>
          <button className={style.goBackButton}>Go Back To Homepage</button>
          <button className={style.homePageButton}>Complete The Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
