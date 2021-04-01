import './App.css';
import Routes from './Routes';
import { withRouter } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
    console.log("this is the constructor on App.js")

  }
  componentDidMount() {
    console.log("this is componentDidMount on App.js")
  }
  componentDidUpdate() {
    console.log("this is render in componentDidUpdate in App.js")
  
  }

 render() {
  console.log("this is rendered in App.js");
  return (

    <div className="App">
      {Routes}
    </div>
  );

}

}

export default withRouter(App);
