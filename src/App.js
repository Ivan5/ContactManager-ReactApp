import React, { Component } from 'react';

import './App.css';
import Contacts from  './components/contacs/Contacts';
import Header from './components/layout/Header';
import { Provider } from './contacs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacs/AddContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager"/>
          <div className="container">
          <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
