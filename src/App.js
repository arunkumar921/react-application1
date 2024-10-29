import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import CRUDComponent from './CRUDComponent';
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
       <Banner />
       <CRUDComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;