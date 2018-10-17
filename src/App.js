import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from  './components/contacs/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { Provider } from './contacs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacs/AddContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
