import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Donor from './components/Apply';
import Organ from './components/Organ';
import Kidney from './components/Kidney';
import {Routes, Route} from 'react-router';
import Lungs from './components/Lungs';
import Heart from './components/Heart';
import Eye from './components/Eye';
import Liver from './components/Liver';
import Ngo from './components/Ngo';
import Laws from './components/Laws';



function App() {

  

  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" component={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/service" element={<Services/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/organ" element={<Organ />} />
        <Route path="/kidney" element={<Kidney />} />
        <Route path="/lungs" element={<Lungs />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/liver" element={<Liver />} />
        <Route path="/ngo" element={<Ngo />} />
        <Route path="/laws" element={<Laws />} />



       
      </Routes>
      <Home/>
      <About/>
      <Services/>
      <Footer/>
      
    </>
  );
}

export default App;


// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Donor from './components/Apply';
// import Organ from './components/Organ';
// import { Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <>
//       <Navbar/>
      
      
//        <Routes>
//          <Route path="/" component={<Home />} />
//          <Route path="/about" element={<About />} />
//          <Route path="/service" element={<Services />} />
//          <Route path="/contact" element={<Contact />} />
//          <Route path="/donor" element={<Donor />} />
//          <Route path="/organ" element={<Organ />} />
//        </Routes>
       
//       <Footer/>
//       <Home/>
//       <About/>
//       <Service/>
//       <Contact/>
//     </>
//   );
// }

// export default App;
