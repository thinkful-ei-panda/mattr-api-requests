import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import DemonynApp from './DemonymApp/DemonymApp';



class App extends Component {
  state = {
  };

  render() {
    return (
      <div className="App">
     <Header />
     <DemonynApp />
      
      </div>
    );
  };
};

export default App;