import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import { Home } from './views/containers/Home';
import { Typing } from './views/containers/Typing';
import { Result } from './views/containers/Result';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/typing" component={Typing} />
        <Route exact path="/result" component={Result} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
