import React from 'react';
import './App.css';
import Homepage from './views/Homepage';
import Detail from './views/Detail';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;