
//import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList/PostList';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetais from './components/PostDetails/PostDetais';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
        
        <Route path="/post/:postId">
          <PostDetais/>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
