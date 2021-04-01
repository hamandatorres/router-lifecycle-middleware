import React from 'react';
import { Link } from 'react-router-dom';


class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
    <>
    <div>This is the Main Component</div>
    <Link to="/lifecycle/myParam">
    <button>Go to the Lifecycle component</button></Link>
    </>
    )
  }
}
export default Main