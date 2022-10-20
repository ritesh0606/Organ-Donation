import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Donor from './components/Apply';
import Organ from './components/Organ';
import {Routes, Route} from 'react-router';


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
