import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import './scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//==============================//
//====UNCOMMENT BEFORE BUILD====//
//==============================//
// This is to prevent right click on the website
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
      // alert("You've tried to open context menu"); //here you draw your own menu
      e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
      // alert("You've tried to open context menu");
      window.event.returnValue = false;
  });
}

serviceWorker.unregister();
