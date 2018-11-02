import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});

const store = configure({ history });

const Root = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
