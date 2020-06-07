import React from 'react';
import './App.css';
import Home from './pages/Home';
import 'rsuite/dist/styles/rsuite-default.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar></NavigationBar>
        <Home></Home>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
