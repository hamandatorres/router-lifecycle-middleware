import React from 'react';


class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    console.log("this is main.js", this.props)
    return (
    <div>This is the Main Component</div>
    )
  }
}
export default Main