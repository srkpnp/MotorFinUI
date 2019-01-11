import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min';

import { render } from 'react-dom';

import App from './App.jsx';

let rootElement = document.getElementById('app');

render(<App />,
    rootElement
)