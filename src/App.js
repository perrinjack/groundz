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
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={(props) => <Navigation />} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/australia" />} />
            <Route exact path="/australia">
              <Item location="australia" />
            </Route>
          </Switch>
          <Route render={(props) => <Footer />} />
        </div>
      </Router>
    );
  }
}

export default App;
