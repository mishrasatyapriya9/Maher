import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import ScrollToTop from "./pages/ScrollToTop.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
