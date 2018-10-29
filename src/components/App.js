import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Demo, Main, NotFoundPage } from 'pages';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Demo" component={Demo} />
      <Route exact component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
