import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import {  HashRouter, Route, Link } from 'react-router';

ReactDOM.render(
    <HashRouter>
      <Route path="/states" component={States} />
      <Route path="/example" component={Example} />
  </HashRouter>
,  
  document.getElementById('reactapp'),
);