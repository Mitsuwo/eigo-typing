import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import { Home } from './views/pages/Home';
import { Typing } from './views/pages/Typing';
import { Result } from './views/pages/Result';
import { TimeUp } from './views/pages/TimeUp';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    {navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i) ? (
      <h6>お使いのデバイスには対応しておりません。</h6>
    ) : (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/typing" component={Typing} />
          <Route exact path="/timeup" component={TimeUp} />
          <Route exact path="/result" component={Result} />
        </BrowserRouter>
      </Provider>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);
