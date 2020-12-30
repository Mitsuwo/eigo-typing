import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import { HomeContainer } from './views/containers/HomeContainer';
import { TypingContainer } from './views/containers/TypingContainer';
import { ResultContainer } from './views/containers/ResultContainer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/typing" component={TypingContainer} />
      <Route exact path="/result" component={ResultContainer} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
