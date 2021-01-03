import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminder from './reduser/reduser';
import './index.css'
const store = createStore(reminder)



ReactDOM.render( 
<Provider store = { store } >
      <App />
 </Provider>,
    document.getElementById('root')
)