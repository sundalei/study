import React from 'react';
import ReactDOM from 'react-dom';
//import Clock from './components/Clock';
//import Greeting from './components/Greeting';
//import LoginControl from './components/LoginControl';
//import Mailbox from './components/Mailbox';
//import Page from './components/Page'
//import NumberList from './components/NumberList';
//import Blog from './components/Blog';
//import NameForm from './components/NameForm';
//import EssayForm from './components/EssayForm';
//import FlavorForm from './components/FlavorForm';
//import Calculator from './components/Calculator';
//import WelcomeDialog from './components/WelcomeDialog';
//import App from './components/SplitPane';
//import SignUpDialog from './components/SignUpDialog';
//import FilterableProductTable from './components/FilterableProductTable';
//import BlueDatePicker from './components/advance/MyComponents';
//import Greeting from './components/advance/Greeting';
//import AutoFocusTextInput from './components/advance/CustomTextInput';
import NameForm from './components/advance/NameForm';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <NameForm  />,
    document.getElementById('root')
);
