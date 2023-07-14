import React from 'react';
import Navbar from './components/NavBar';
import Search from './components/Search';
import Test from './components/Test';
import WordList from './components/WordList';
import LoginForm from './components/LoginForm';
import RegisterUser from './components/RegisterUser';
import { AuthProvider } from './components/AuthContext';
import words from './data/words';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/components/Search" element={<Search />} />
          <Route path="/components/Test" element={<Test words={words} />} />
          <Route path="/components/WordCard" element={<WordList words={words} />} />
          <Route path="/components/LoginForm" element={<LoginForm />} />
          <Route path="/components/RegisterUser" element={<RegisterUser />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;