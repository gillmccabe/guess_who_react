var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main');

window.onload = function(){
  ReactDOM.render(
    <Main/>,
    document.getElementById('app')
  );
}