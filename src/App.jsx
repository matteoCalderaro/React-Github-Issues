import React from 'react';
import Issues from './Issues';
import Details from './Details';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/React-Github-Issues/">HomePage</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/React-Github-Issues/">
              <Issues />
            </Route>
            <Route path="/React-Github-Issues/issues/:id">
              <Details />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}
