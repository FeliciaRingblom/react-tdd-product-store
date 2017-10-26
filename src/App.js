import React, { Component } from 'react';
import ProductList from './components/ProductList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <h1>My Product Store</h1>
        <ProductList/>
      </div>
    );
  }
}
export default App;