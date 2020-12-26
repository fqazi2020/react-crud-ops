import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap-css';

import 'jquery';
import 'popper.js';
import 'reactstrap'
import Users from './Componenets/Pages/Users';
import Navbar from "./layouts/navbar";
import Home from './Componenets/Pages/Home';
import Contact from './Componenets/Pages/Contact';
import ViewUser from './Componenets/Pages/ViewUser';
import EditUser from './Componenets/Pages/EditUser';
import AddUser from './Componenets/Pages/Add';
import NoFound from './Componenets/Pages/NoFound';
import footer from './layouts/footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return(
    <div className="App">
 
    <Router>
    <Navbar></Navbar>
     
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact}/>
      <Route exact path ="/users/view/:id" component={ViewUser}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path ="/users/add" component={AddUser}/>
      <Route exact path ="/users/:id" component={EditUser}/>     
      
    </Switch>

   
    </Router>
    
    </div>
  )   
      
  }  


export default App;
