import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import { HomeContainer } from './views/containers/HomeContainer';
import { TypingContainer } from './views/containers/TypingContainer';
import { ResultContainer } from './views/containers/ResultContainer';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/typing" component={TypingContainer} />
        <Route exact path="/result" component={ResultContainer} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
