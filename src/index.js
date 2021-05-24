import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {faPlusIcon, faSearchIcon, faCloseIcon} from './components/icons';

library.add(faPlusIcon, faSearchIcon, faCloseIcon);
dom.watch();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


