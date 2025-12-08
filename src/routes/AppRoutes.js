import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Users from "../pages/UsersPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
