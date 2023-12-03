import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React,{useState} from "react";
import PhoneHeader from "./components/phone-header/PhoneHeader";
import { useMediaQuery } from "@uidotdev/usehooks";
import AppRouter from "./routes/AppRouter";

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
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
