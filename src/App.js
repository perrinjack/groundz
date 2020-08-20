import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/australia" />} />
            <Route path="/beach" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
