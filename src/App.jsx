import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
    </div>
  );
};

export default App;