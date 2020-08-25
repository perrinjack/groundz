import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Item from './components/Item';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={(props) => <Navigation />} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/australia" />} />
            <Route key="aus-path" exact path="/australia">
              <Item location="australia" />
            </Route>
            <Route key="nz-path" exact path="/new-zealand">
              <Item location="new-zealand" />
            </Route>
          </Switch>
          <Route render={(props) => <Footer />} />
        </div>
      </Router>
    );
  }
}

export default App;
