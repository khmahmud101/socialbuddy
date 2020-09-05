import React from 'react';
//import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList/PostList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <PostList></PostList>
    </div>
  );
}

export default App;
