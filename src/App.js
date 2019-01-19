import React, { Component } from 'react';
import  './App.css';
import FirstComponent from './Component/FirstComponent';
import SecondComponent from './Component/SecondComponent';
import ThirdComponent from './Component/ThirdComponent';
import FourthComponent from './Component/FourthComponent';

class App extends Component {
  render() {
    return (
      <div>
        <FirstComponent/>            
        <SecondComponent/>            
        <ThirdComponent/>            
        <FourthComponent/>            
      </div>
    );
  }
}

export default App;
