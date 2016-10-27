import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
  render() {
    return(
      <div>
        <p>Name: {this.props.name}</p>
        <p>Count: {this.props.count}</p>
      </div>
    )
  }
}

MyComponent.propTypes = {
  name: React.PropTypes.string,
  count: React.PropTypes.number.isRequired
}

MyComponent.defaultProps = {
  name: 'Alberto',
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Hello, friend</p>
        <MyComponent name={'Cueto'} count={2} ></MyComponent>
        <MyComponent name={10} ></MyComponent>
        <MyComponent count={5} ></MyComponent>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
