import React from 'react';


class Lifecycle extends React.Component {
  constructor() {
    super()
    this.state = {
      leadingThisReview: undefined,
    }
  }
  render() {
    return (
    <div>This is the Lifecycle Component</div>
    )
  }
}
export default Lifecycle