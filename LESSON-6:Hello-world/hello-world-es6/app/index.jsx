import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		return (
			<p>Hello world from es6</p>
		)	
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
