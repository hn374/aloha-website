import React from 'react';
import './App.css';
import Home from './pages/Home';
import 'rsuite/dist/styles/rsuite-default.css';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroBanner></HeroBanner>
        <Home></Home>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
