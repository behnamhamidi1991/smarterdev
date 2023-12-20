import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./Context/CourseContext/CourseContext";
import Homepage from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound/NoteFound";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Headroom from "react-headroom";

function App() {
  return (
    <CourseProvider>
      <div className="app">
        <Router>
          <div className="wrapper">
            <Headroom>
              <Header />
            </Headroom>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </CourseProvider>
  );
}

export default App;
