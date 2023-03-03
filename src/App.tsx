import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Post from './pages/Post';
import Test from './components/Test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    // Fix router. Write router tests.
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/post/:id" element={<Post />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
