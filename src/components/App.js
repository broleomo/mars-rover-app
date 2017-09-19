import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';

class App extends Component {
  constructor(props){
    super(props);


  }
  render() {
    return (
      <div>
      <p> Hello World</p>
      <GetImageForm/>
      </div>
    );
  }
}

export default App;
