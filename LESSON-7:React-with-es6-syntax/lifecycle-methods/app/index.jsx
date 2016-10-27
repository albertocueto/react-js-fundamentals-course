import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.periodic = this.periodic.bind(this)
  }

  periodic () {
    this.setState({
      count: this.state.count + 1
    })
  }

  //This is the best place to put ajax calls, loads one time, and then content is loaded to state:
  componentDidMount() {
    console.log('Inside componentDidMount')
    setInterval(this.periodic, 500)
  }

  componentWillUnmount() {
    console.log('Inside componentWillMount')
    clearInterval(this.periodic)
  }

  stateChange() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('Inside render')
    return (
      <div>
        <p>Hello World!</p>
        <button onClick={this.stateChange.bind(this)}>Counter</button>
        <p>You have clicked that useless button {this.state.count} times</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
