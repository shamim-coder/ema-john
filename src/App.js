import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Shop from './components/Shop/Shop';


const App = () => {
  return (
    <main>
      <header id="header-section">
        <Header />
      </header>
      <section id="shop">
        <Shop />
      </section>
    </main>
  );
};

export default App;