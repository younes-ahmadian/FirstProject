import './App.css';

import Header from './components/Header';
import Navbar from './navigationBar/Navbar';
import Maininfo from './components/Maininfo';
import Footer from './components/Footer';
import Sideinfo from './components/Sideinfo';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ParsRegulator from './navigationBar/navinfo/ParsRegulator';
import RayanKhodro from './navigationBar/navinfo/RayanKhodro';
import Art from './navigationBar/navinfo/Art';
import EnglishLang from './navigationBar/navinfo/EnglishLang.js';
import Exercise from './navigationBar/navinfo/Exercise.js';
import Programming from './navigationBar/navinfo/Programming.js';
import Studies from './navigationBar/navinfo/Studies.js';




function App() {
  return (
    <div className="App">
         <BrowserRouter>
    
       <Header/>
       <Navbar/>
       <Sideinfo/>
       
       <Routes>
       <Route path = "/" element = {<Maininfo/>} />
       <Route path = "/ParsRegulator" element = {<ParsRegulator/>} />
       <Route path = "/RayanKhodro" element = {<RayanKhodro/>} />
       <Route path = "/Art" element = {<Art/>}/>
       <Route path = "/EnglishLang" element = {<EnglishLang/>}/>
       <Route path = "/Exercise" element = {<Exercise/>}/>
       <Route path = "/Programming" element = {<Programming/>}/>
       <Route path = "/Studies" element = {<Studies/>}/>
       </Routes>
     
       <Footer/>
      
       </BrowserRouter>
    </div>
  );
}

export default App;
