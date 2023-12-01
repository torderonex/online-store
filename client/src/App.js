  import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import Footer from "./components/footer/Footer";
import React,{useState} from "react";
import SignupPage from "./pages/signup/SignupPage";
import CategoryPage from "./pages/category/CategoryPage";
import PhoneHeader from "./components/phone-header/PhoneHeader";
import {Routes, Route }from 'react-router-dom';
import { useMediaQuery } from "@uidotdev/usehooks";
import ProductPage from "./pages/Product/Product";
import NotFound from "./pages/not-found/NotFound";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  if (isDropdownOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = ''; 
  }
  const isWide = useMediaQuery('(min-width : 1500px )');
  
  return (
    <div className='App'>
      {
        isWide ?
        <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
      : <PhoneHeader/>
      }
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path={"/product"+"/:id"} element={<ProductPage/> }/>
        <Route path={"*"} element={<NotFound/> }/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
