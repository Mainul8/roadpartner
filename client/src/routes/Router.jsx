import React from "react";
import Categories from "../pages/Categories";
import HeaderComp from "../components/Header/Header.jsx";
import FooterComp from "../components/Footer/Footer.jsx";
import Services from "../pages/Services.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ListingPlans from "../pages/Plans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import Blogs from "../pages/Blogs.jsx";
const Router = () => {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plans" element={<ListingPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default Router;
