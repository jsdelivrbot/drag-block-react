import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/app';
import { APP_LOADED } from './constants/';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app'));

window.onload = () => {
  let elements = document.querySelectorAll('.blocks-nav__item');
  store.dispatch({
    type: APP_LOADED,
    blocks: [].slice.call(elements).map(item => {
      return {
        id: item.dataset.id,
        top: item.offsetTop
      };
    })
  })
}



// [].slice.call(elements).forEach( function(item) {
  // item.addEventListener('dragstart', dragStart, false);
  // item.addEventListener('drag', drag, false);
  // item.addEventListener('dragenter', dragfunc, false);
  // item.addEventListener('dragleave', dragfunc, false);
  // item.addEventListener('dragover', dragfunc, false);
  // item.addEventListener('drop', dragfunc, false);
  // item.addEventListener('dragend', dragEnd, false);
// });

function dragStart(e) {
	console.log('start');
}
function drag(e) {
	console.dir(e);
}
function dragfunc(e) {
	console.log(e.type);
}
function dragEnd(e) {
	console.log('end');
}