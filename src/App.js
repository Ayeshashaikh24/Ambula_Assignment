import React from 'react';
import Header from './components/Header'

import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
  <>
   


       
      <Header></Header>
           <TodoList />
      
           <ShoppingCart  />

           </>
  );
}



 
  

export default App;
