import React from 'react';
import { render } from 'react-dom';
import Greeting from './components/Greeting/Index';
import Grocery from './components/Grocery/Index';

render(
  <div>
    <Greeting />
    <Grocery />
  </div>
  , document.getElementById('root')
);