import { createContext, useState } from "react";
import courseArray from "../../../data/courses";

const CourseContext = createContext(null);

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(courseArray);
  const [cart, setCart] = useState([]);

  // Add items to the cart
  const handleClick = (item) => {
    let isPresent = false;
    console.log(item);
    cart.forEach((course) => {
      if (item.id === course.id) isPresent = true;
    });
    if (isPresent) {
      window.alert("This course already exists in your cart!");
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  // Delete items from the cart
  const deleteCourse = (id) => {
    if (window.confirm("Are you sure?")) {
      setCart(cart.filter((course) => course.id !== id));
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        cart,
        handleClick,
        deleteCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
