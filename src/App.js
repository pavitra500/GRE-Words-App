import React from 'react';
import Navbar from './components/NavBar';
import Search from './components/Search';
import WordCard from './components/WordCard';
import Test from './components/Test'
import WordList from './components/WordList';
import words from './data/words'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/components/Search" element={<Search />} />
        <Route path="/components/Test" element={<Test words={words}/>} />
        <Route path="/components/WordCard" element={<WordList words={words} />} />
      </Routes>
    </Router>
  );
};

export default App;