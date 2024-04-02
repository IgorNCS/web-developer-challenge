import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Header></Header>
      </header>
      <body className='AppBody'>
        <Body></Body>
      </body>
    </div>
  );
}

export default App;
