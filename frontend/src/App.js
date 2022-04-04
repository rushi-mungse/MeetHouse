import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import Authenticate from "./authentication";
import Activate from "./activate";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
