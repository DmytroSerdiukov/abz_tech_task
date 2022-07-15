import React from 'react'

import Header from "./components/Header";
import Users from "./components/Users/container";
import Register from "./components/Register/container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <Register />
    </div>  
  );
}

export default App;
