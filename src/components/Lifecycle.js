import React from 'react';


class Lifecycle extends React.Component {
  constructor() {
    super()
    this.state = {
      leadingThisReview: undefined,
    }
  }

componentDidMount() {
  console.log("this is render in componentDidMount in lifecycle.js")
}
componentDidUpdate() {
  console.log("this is render in componentDidUpdate in lifecycle.js")

}
componentWillUnmount() {
  console.log("this is render in componentWillUnmount in lifecycle.js")
}

updateState = () => {
  this.setState({
    leadingThisReview: 'Nitin Misra'
  })
}

  render() {
    console.log("this is render in lifecycle.js")
    return (
    <>
    <div>This is the Lifecycle Component</div>
    <button onClick={this.updateState}>Update State</button>
    </>
    )
  }
}
export default Lifecycle