import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import './App.css';
import Services from './Services.jsx';
import User from './User.jsx';
import Search from './Search';


function App() {
  return (

    <>

      <Router>
        <Menu />
        <Routes>
          <Route
            exact
            path="/about"
            Component={() => <About name="ABOUT" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path='/services' element={<Services />}/>
          <Route path='/user/:fname/:lname' element={<User/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
