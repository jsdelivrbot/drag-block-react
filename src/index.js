import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/app';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app'));

let elements = document.querySelectorAll('.blocks-nav__item');

// [].slice.call(elements).forEach( function(item) {
//   item.addEventListener('dragstart', dragStart, false);
//   item.addEventListener('drag', drag, false);
//   item.addEventListener('dragenter', dragfunc, false);
//   item.addEventListener('dragleave', dragfunc, false);
//   item.addEventListener('dragover', dragfunc, false);
//   item.addEventListener('drop', dragfunc, false);
//   item.addEventListener('dragend', dragEnd, false);
// });

function dragStart(e) {
	console.log('start');
}
function drag(e) {
	console.log('drag');
}
function dragfunc(e) {
	console.log(e.type);
}
function dragEnd(e) {
	console.log('end');
}