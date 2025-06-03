import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Admission from './Pages/Admission';
import News from './Pages/News';
import Portal from './Pages/Portal'
import Footer from './Components/Footer';
import NotFoundPage from './Pages/NotFoundPage';
import AdmissionForm from './Pages/AdmissionForm';
import Article from './Pages/Article';
import LoginPage from './Pages/LoginPage';
import ChangePassword from './Pages/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/news" element={<News />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
