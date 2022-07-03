
import './App.css';

import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpand: false
    }
  }

  handleExpand = () => {
    this.setState({
      isExpand: true
    })

  }
  handleCollapse = () => {
    this.setState({
      isExpand: false
    })
  }


  render() {
    if (this.state.isExpand === false) {
      return (
        <div id='wrapper'>
          <button onClick={this.handleExpand}>Expand content</button>

        </div>
      )
    }

    return (
      <div id='wrapper'>
        <button onClick={this.handleCollapse}>Collapse content</button>
        <p>As many brand owners have realized, it’s one thing to manage your social channels on a day-to-day basis, and a completely different issue to actually have something to say and something interesting to post regularly.</p>

      </div>
    )

  }


}

export default App


