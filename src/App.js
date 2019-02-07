import React, { Component } from 'react';
import CategoryList from './components/CategoryList.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <p>Idea Case Demo App </p>
      
        <CategoryList />
      </div>
    );
  }
}

export default App;
