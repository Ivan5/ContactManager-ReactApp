import React, { Component } from 'react';

import './App.css';
import Contact from  './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="John Doe" email="jdoe@gmail.com" phone="888-888-888"/>
        <Contact name="Karen Smith" email="karen@gmail.com" phone="999-999-999"/>
      </div>
    );
  }
}

export default App;
