import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/post/:postId">
            <PostDetails />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
