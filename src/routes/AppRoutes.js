import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Users from "../pages/UsersPage";
import Sample from "../Sample/sample";
import Form from "../Sample/form"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sample" element ={<Sample />}/>
        <Route path="/form" element ={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
