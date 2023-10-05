import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import Footer from "./components/footer/Footer";
import React,{useState} from "react";
import SignupPage from "./pages/signup/SignupPage";
import CategoryPage from "./pages/category/CategoryPage";

import {Routes, Route }from 'react-router-dom';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  if (isDropdownOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = ''; 
  }

  return (
    <div className='App'>
      <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
