import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={(props) => <Navigation />} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/australia" />} />
            <Route path="/australia" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
