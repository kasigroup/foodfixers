import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import './css/flat-ui/css/flat-ui.css';
import App from './components/App';
import StoreFront from './components/StoreFront';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StoreFront} />
        <Match exactly pattern="/login" component={Login} />
        <Match exactly pattern="/app" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#main"));
